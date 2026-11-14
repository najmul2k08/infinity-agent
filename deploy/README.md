# Deploy the Web UI on a headless host

English only; the `deploy/` tree is operational tooling and stays out of the documentation taxonomy.

The shipped `infinity --profile web` listener binds loopback and authenticates every API call with a launch token exchanged for a signed session cookie. A tunnel supplies the external leg, and `--public-url` with `--trusted-host` tell the harness which authority browsers arrive under.

[Public deployments](../docs/user/guide/public-deployments.md) owns the proxy requirements and the trust fence; this page covers only the files in `deploy/`.

## Build

Node 24.9 or newer and pnpm 11.28.5 are required.

```sh
pnpm install --frozen-lockfile
pnpm run build
```

## Configure

Copy `infinity-web.env.example` to `infinity-web.env` and fill it in. The file is gitignored and holds the gateway key, so keep its mode at `600`.

`cordis.patch.yml.example` shows a custom model provider for an OpenAI-compatible relay. Copy the provider block into `$INFINITY_HOME/profiles/web/cordis.patch.yml`; the adapter re-reads that file on the next request, so no restart follows an edit.

## Run

```sh
./deploy/supervise.sh
```

`run-web.sh` starts one listener in the foreground; `supervise.sh` restarts it after a crash and appends to `$INFINITY_LOG_DIR/infinity-web.log`.

The startup line prints the entry URL with its launch token. That URL is the credential: hand it to intended users and nobody else.

## Publish

Start any tunnel that preserves the browser `Host` header and forwarding WebSocket upgrades, then set `INFINITY_PUBLIC_URL` to its HTTPS root and `INFINITY_TRUSTED_HOST` to its host.

```sh
cloudflared tunnel --url http://127.0.0.1:3080
```

A quick tunnel prints a `*.trycloudflare.com` host that changes on every start, so update both values and restart the listener when it rotates. A named tunnel with a stable hostname avoids that.
