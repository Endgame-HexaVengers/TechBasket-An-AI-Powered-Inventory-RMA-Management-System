# TechBasket

Two independent Node projects in one repo. No npm workspaces, no root `package.json` — install and run each project from its own directory with its own `node_modules` and lockfile.

- `techbasket_backend/` — Express 5 API (TypeScript file, CommonJS `require` style). Run: `npx ts-node-dev index.ts` from `techbasket_backend/`. No `tsconfig.json`, no `dev` script (the `test` script is a placeholder that errors). `dotenv.config()` loads `.env` at runtime; there is no `.env` file committed.
- `techbasket_frontend/` — Next.js 16.3.1 App Router + React 19 + Tailwind v4 + React Compiler (`reactCompiler: true` in `next.config.ts`). Scripts: `npm run dev` / `build` / `start` / `lint`. TS path alias `@/*` → `src/*`. Do not touch `techbasket_frontend/AGENTS.md` — it is auto-generated and re-added by `next dev` (Next 16 has breaking API changes; read `node_modules/next/dist/docs/` before writing frontend code).

## Git gotchas

- `techbasket_frontend` is its own git repo (branch `master`), recorded in the root repo (branch `Production`) only as a gitlink (mode 160000). There is no `.gitmodules`. Frontend commits happen inside `techbasket_frontend/`; the root repo just points at a frontend commit hash.
- The backend has no `.gitignore`: `techbasket_backend/node_modules/`, `package.json`, and `package-lock.json` are currently untracked in the root repo. Do not stage `node_modules`.

## Ports

Both servers default to port 3000, so running both at once conflicts. Give the backend a distinct port: `$env:PORT=5000; npx ts-node-dev index.ts` (or a `.env` with `PORT`).
