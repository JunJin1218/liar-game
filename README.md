# 라이어 게임

https://liar-game.com

## Dev

```zsh
bun install
bun dev
bun run build
```

Redis runs on `localhost:6379` by default. Copy `.env.template` to
`.env.local` when a local Redis password is required.

## Railway

Deploy this repository as a web service, add a Redis database to the same
project, and expose the Redis service's `REDIS_URL` to the web service as a
reference variable. Railway's `PORT` variable is used automatically by
`next start`.
