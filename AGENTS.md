# TechBasket

Two independent Node projects in one repo. No npm workspaces, no root `package.json` — install and run each project from its own directory with its own `node_modules` and lockfile.

## Backend — `techbasket_backend/`

- Express 5 + Mongoose API. Entrypoint is `src/index.ts`, written as CommonJS `require` calls mixed with TS `import type`. Run from `techbasket_backend/`: `npx ts-node-dev src/index.ts`.
- `src/index.ts` has no `export default` — `app.listen()` starts the server directly (kept CommonJS-compatible with `verbatimModuleSyntax: true`).
- No `dev`/`start`/`build` scripts; the `test` script is a placeholder that errors.
- `tsconfig.json` is tracked (`rootDir: ./src`, `outDir: ./dist`); `.gitignore` ignores `node_modules/`, `.env`, `dist/`.
- Env: `dotenv.config()` loads `.env` at runtime (gitignored, local copy currently empty). `.env.example` documents `MONGODB_URL`, `MONGODB_DB`, `JWT_SECRET`, `PORT`. The server reads `PORT` from env, defaulting to 5000.

## Frontend — `techbasket_frontend/`

- Next.js 16.3.1 App Router + React 19 + Tailwind v4 + React Compiler (`reactCompiler: true` in `next.config.ts`). Scripts: `npm run dev` / `build` / `start` / `lint`. TS path alias `@/*` → `src/*`.
- Do not touch `techbasket_frontend/AGENTS.md` — it is auto-generated and re-added by `next dev`. Next 16 has breaking API changes; read `node_modules/next/dist/docs/` (present in the frontend's `node_modules`) before writing frontend code.

## Git

- Single root repo; the frontend is tracked as ordinary files (it used to be a nested git repo recorded as a gitlink, but there is no `.git` in `techbasket_frontend/` anymore — no submodules). Run git from the root, never `git -C techbasket_frontend`.
- Working tree is mid-migration: old `techbasket_backend/index.ts` / `index.js` are deleted, new `src/` and `.env.example` are untracked, `tsconfig.json` is modified. Never stage `node_modules` or `.env`.
- Root repo branches: `Badsha` (current), `main`, `tonoy`.

## Ports

Both servers default to 3000, so running both at once conflicts. Give the backend a distinct port: `$env:PORT=5000; npx ts-node-dev src/index.ts` (or set `PORT` in `techbasket_backend/.env`).