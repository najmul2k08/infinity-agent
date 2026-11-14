#!/usr/bin/env sh
# Start one Web UI listener in the foreground.
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
root=$(dirname -- "$here")
env_file=${INFINITY_ENV_FILE:-$here/infinity-web.env}

if [ ! -f "$env_file" ]; then
  echo "missing $env_file; copy infinity-web.env.example and fill it in" >&2
  exit 1
fi

# The caller wins over the file, so a supervisor can supply the live tunnel
# authority while the file keeps working for a manual foreground run.
keep_public=${INFINITY_PUBLIC_URL-}
keep_trusted=${INFINITY_TRUSTED_HOST-}
set -a
. "$env_file"
set +a
[ -n "$keep_public" ] && INFINITY_PUBLIC_URL=$keep_public
[ -n "$keep_trusted" ] && INFINITY_TRUSTED_HOST=$keep_trusted

: "${INFINITY_HOME:?INFINITY_HOME is unset}"
: "${GATEWAY_API_KEY:?GATEWAY_API_KEY is unset}"

set -- --profile web --no-open \
  --host "${INFINITY_WEB_HOST:-127.0.0.1}" \
  --port "${INFINITY_WEB_PORT:-3080}"

if [ -n "${INFINITY_PUBLIC_URL:-}" ]; then
  set -- "$@" --public-url "$INFINITY_PUBLIC_URL"
fi
if [ -n "${INFINITY_TRUSTED_HOST:-}" ]; then
  set -- "$@" --trusted-host "$INFINITY_TRUSTED_HOST"
fi

cd -- "$root"
exec pnpm infinity "$@"
