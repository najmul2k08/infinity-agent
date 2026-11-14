#!/usr/bin/env bash
# Keep one Web UI listener and one Cloudflare quick tunnel alive together.
# The quick tunnel hostname rotates on every start, so the listener is always
# restarted with the advertised URL and trusted authority of the live tunnel.
set -uo pipefail
here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
env_file=${INFINITY_ENV_FILE:-$here/infinity-web.env}
log_dir=${INFINITY_LOG_DIR:-$here/logs}
cloudflared_bin=${CLOUDFLARED_BIN:-cloudflared}
port=${INFINITY_WEB_PORT:-3080}
mkdir -p "$log_dir"
log=$log_dir/supervise.log
tunnel_log=$log_dir/tunnel.log
tunnel_url_file=$log_dir/tunnel.url

note() { printf '%s %s\n' "$(date -u +%FT%TZ)" "$*" >>"$log"; }

cleanup() {
  [ -n "${listener_pid:-}" ] && kill "$listener_pid" 2>/dev/null
  [ -n "${tunnel_pid:-}" ] && kill "$tunnel_pid" 2>/dev/null
}
trap cleanup EXIT INT TERM

if [ ! -f "$env_file" ]; then
  echo "missing $env_file; copy infinity-web.env.example and fill it in" >&2
  exit 1
fi

while :; do
  note "starting tunnel -> 127.0.0.1:$port"
  rm -f "$tunnel_url_file"
  : >"$tunnel_log"
  "$cloudflared_bin" tunnel --no-autoupdate --url "http://127.0.0.1:$port" >>"$tunnel_log" 2>&1 &
  tunnel_pid=$!

  url=""
  for _ in $(seq 1 60); do
    url=$(grep -Eo 'https://[a-z0-9-]+\.trycloudflare\.com' "$tunnel_log" | tail -1)
    [ -n "$url" ] && break
    kill -0 "$tunnel_pid" 2>/dev/null || break
    sleep 1
  done

  if [ -z "$url" ]; then
    note "tunnel did not publish a hostname; retrying"
    kill "$tunnel_pid" 2>/dev/null
    wait "$tunnel_pid" 2>/dev/null
    sleep 5
    continue
  fi

  host=${url#https://}
  printf '%s\n' "$url" >"$tunnel_url_file"
  note "tunnel $url"

  note "starting listener host=$host"
  # Wait for the previous listener's socket to clear before binding again.
  for _ in $(seq 1 30); do
    curl -s -o /dev/null -m 1 "http://127.0.0.1:$port/" 2>/dev/null || break
    sleep 1
  done
  INFINITY_PUBLIC_URL="$url/" INFINITY_TRUSTED_HOST="$host" \
    INFINITY_ENV_FILE="$env_file" "$here/run-web.sh" >>"$log_dir/infinity-web.log" 2>&1 &
  listener_pid=$!

  # Restart the pair when either side exits, with a capped backoff.
  while kill -0 "$listener_pid" 2>/dev/null && kill -0 "$tunnel_pid" 2>/dev/null; do
    sleep 5
  done

  note "listener or tunnel exited; restarting both"
  kill "$listener_pid" "$tunnel_pid" 2>/dev/null
  wait "$listener_pid" 2>/dev/null
  wait "$tunnel_pid" 2>/dev/null
  sleep 5
done
