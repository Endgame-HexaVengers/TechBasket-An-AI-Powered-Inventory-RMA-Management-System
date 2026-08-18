# Backend Errors & Fixes

Checked: `techbasket_backend` (Express 5 + TypeScript).

> Status: Error 1 and Error 2 are **resolved**. The Note below remains informational.

## Error 1 — Blocking: TS1295 (server won't start) — FIXED

**Files involved**

- `src/index.ts:36` — ends with `export default app;`
- `tsconfig.json` — `"verbatimModuleSyntax": true`
- `package.json` — `"type": "commonjs"`

**Symptom**

- `npx tsc --noEmit` fails:
  `src/index.ts(36,1): error TS1295: ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'.`
- `npx ts-node-dev src/index.ts` fails to compile — the server never starts.

**Root cause**

`export default` is an ECMAScript export, but the file is treated as CommonJS (`"type": "commonjs"`) while `verbatimModuleSyntax` forbids mixing ES exports into a CommonJS file.

**Solve — Option A (recommended): remove the export**

`app.listen()` already starts the server, and nothing imports `app`, so the line is unnecessary:

```diff
 app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
 });

-export default app;
```

**Solve — Option B: disable verbatim module syntax**

In `tsconfig.json`:

```diff
-    "verbatimModuleSyntax": true,
+    "verbatimModuleSyntax": false,
```

**Solve — Option C: convert the backend to ESM**

In `package.json`:

```diff
-  "type": "commonjs",
+  "type": "module",
```

Then rewrite the `require()` calls as `import` statements in `src/index.ts` (and keep `export default app;`):

```ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
```

**Verify the fix**

```powershell
npx tsc --noEmit
$env:PORT=5000; npx ts-node-dev src/index.ts   # expect: Server running on http://localhost:5000
```

Option A is verified: after removing the export, `tsc` passes and the server boots.

## Error 2 — Minor: PORT default mismatch — FIXED

**Files involved**

- `src/index.ts:12` — defaults to `'5000'`: `parseInt(process.env.PORT || '5000', 10)`
- `AGENTS.md` and `.env.example` — say the default is 3000

**Symptom**

Docs and code disagree about the default port. Not a runtime bug, but confusing.

**Solve**

Pick one and align the rest — update the docs to 5000 (recommended, avoids the frontend's 3000) or change the code default back to 3000.

## Note — `npm test` is a placeholder

`package.json` has `"test": "echo \"Error: no test specified\" && exit 1"`. There are no tests yet; the command errors by design.