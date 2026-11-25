# seleniumbase-rs-web

Web front end and automation studio for [seleniumbase-rs](https://github.com/MustCodeAl/seleniumbase-rs). Provides an Actix-web API server and TypeScript UI for browser automation management, session inspection, and live CDP event streaming.

## Setup

Requires Rust 1.100+ and Node.js 20+.

```bash
# Backend
cargo build --release

# Frontend
npm install
npm run build
```

## Running

```bash
cargo run --release
```

The server starts on `http://localhost:8080` by default. Set `SB_WEB_PORT` to override.

## API

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/sessions` | List active browser sessions |
| `POST` | `/api/sessions` | Start a new session |
| `DELETE` | `/api/sessions/:id` | Close a session |
| `GET` | `/api/sessions/:id/cdp` | WebSocket CDP proxy |

## Development

```bash
cargo watch -x run &
npm run dev
```
