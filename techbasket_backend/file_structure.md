# TechBasket Backend — File Structure

File-based modular pattern for the TechBasket **AI-Powered Inventory & RMA Management System** backend (Express 5 + Mongoose + TypeScript, run via `ts-node-dev`).

## Pattern

Every feature is a **module folder** under `src/modules/<feature>/`. Each module owns its complete vertical slice as flat, named files — one concern per file, no sub-layers. Cross-cutting concerns (config, middleware, utils, constants, shared types) live outside `modules/`.

**Per-module file naming** (each optional — only include what the module needs):

| File | Responsibility |
| --- | --- |
| `<name>.routes.ts` | Express `Router`, endpoint wiring, applies middleware (auth, authorize, validate) |
| `<name>.controller.ts` | Request handling, calls service, responds via `ApiResponse` |
| `<name>.service.ts` | Business logic — approval enforcement, serial tracking, stock rules |
| `<name>.model.ts` | Mongoose schema/model (one per entity) |
| `<name>.schema.ts` | Zod validation schemas (body/query/params) |
| `<name>.types.ts` | Module-local TS interfaces |

**Dependency rule:** controllers depend on services and models; services depend on models and other services; routes depend on controllers. Modules may import shared `utils/`, `middlewares/`, `constants/`, `types/`, and other modules' services — never each other's controllers/routes.

## Tree

```
techbasket_backend/
├── .env.example               # documents MONGODB_URL, MONGODB_DB, JWT_SECRET, PORT
├── .gitignore                 # ignores node_modules/, .env, dist/
├── package.json
├── tsconfig.json              # rootDir: ./src, outDir: ./dist, verbatimModuleSyntax: true
└── src/
    ├── index.ts               # bootstrap: dotenv, connect DB, app.listen(PORT)
    ├── app.ts                 # express app factory: middleware, mount /api routes, notFound + error handlers
    ├── config/
    │   ├── env.ts             # validated env access (MONGODB_URL, DB, JWT_SECRET, PORT)
    │   └── db.ts              # mongoose.connect()
    ├── constants/
    │   └── index.ts           # enums: ApprovalStatus, StockType, UnitStatus, RmaStatus, ClaimStatus, SaleStatus, Roles, action permissions
    ├── types/
    │   ├── index.ts           # shared interfaces (JwtPayload, RequestUser, ApiResponseShape …)
    │   └── express.d.ts       # augment Express.Request (req.user, req.company, req.branch)
    ├── utils/
    │   ├── ApiResponse.ts     # { success, message, data } response builder
    │   ├── ApiError.ts        # error class with statusCode + errors[]
    │   ├── catchAsync.ts      # async route wrapper (forward errors to error middleware)
    │   ├── token.ts           # JWT sign/verify
    │   └── generator.ts       # id/serial builders (PRD-000001, UNIT-…, PUR-…)
    ├── middlewares/
    │   ├── auth.middleware.ts     # verify JWT, load user/company/branch context into req
    │   ├── authorize.middleware.ts# action/role permission guard
    │   ├── validate.middleware.ts # Zod validation for body/query/params
    │   ├── error.middleware.ts    # global handler → { success:false, message, errors }
    │   └── notFound.middleware.ts # 404 handler
    └── modules/
        ├── auth/              # login, logout, me, refresh
        ├── company/           # Company entity
        ├── branch/            # Branch entity (belongs to a company)
        ├── user/              # User + Role + Permission entities
        ├── brand/             # Brand entity
        ├── category/          # Category entity
        ├── supplier/          # Supplier entity
        ├── product/           # Product + ProductApproval entities
        ├── productUnit/       # ProductUnit / serial-number entity
        ├── purchase/          # Purchase + PurchaseItem entities
        ├── inventory/         # StockMovement + StockTransfer + serial search
        ├── sales/             # Sale + SaleItem + Customer entities
        ├── rma/               # RMA + RMAItem + SupplierClaim entities
        ├── report/            # read-only aggregated reports
        └── ai/                # forecasting/insights service (read-only, never mutates stock/approvals)
```

## Module → entity mapping

| Module | Entities (models) | Route base |
| --- | --- | --- |
| `auth` | — (session via JWT) | `/api/auth` |
| `company` | Company | `/api/companies` |
| `branch` | Branch | `/api/branches` |
| `user` | User, Role, Permission | `/api/users`, `/api/roles` |
| `brand` | Brand | `/api/brands` |
| `category` | Category | `/api/categories` |
| `supplier` | Supplier | `/api/suppliers` |
| `product` | Product, ProductApproval | `/api/products`, `/api/product-approvals` |
| `productUnit` | ProductUnit | `/api/units`, `/api/inventory/serial/:serialNumber` |
| `purchase` | Purchase, PurchaseItem | `/api/purchases` |
| `inventory` | StockMovement, StockTransfer | `/api/inventory`, `/api/stock-transfers` |
| `sales` | Sale, SaleItem, Customer | `/api/sales`, `/api/customers` |
| `rma` | RMA, RMAItem, SupplierClaim | `/api/rma` |
| `report` | — (aggregates over other modules) | `/api/reports` |
| `ai` | — (aggregates + external model calls) | `/api/ai` |

## Standards

- **Response shape:** success → `{ success: true, message, data }`; validation/error → `{ success: false, message, errors }`.
- **Validation:** Zod in `<name>.schema.ts`, applied via `validate.middleware.ts` at the route level.
- **Unique constraints:** SKU unique (Product), `serialNumber` globally unique (ProductUnit) — enforce in Mongoose schema + indexes.
- **Business rules enforced in services, never only by the frontend:** only `APPROVED` + `ACTIVE` products are operationally selectable; sold serials cannot be sold again; Current Stock and RMA Stock are separate; Supplier Hand reduces RMA Stock; serial replacement preserves old history and links the new serial; stock changes always create `StockMovement`/`AuditLog` records; historical transactions are never physically deleted.
- **IDs:** human-readable generators (`PRD-000001`, `UNIT-…`, `PUR-…`) via `utils/generator.ts`.

## Build order (per project doc §13)

Express setup → env/config → MongoDB + Mongoose → error handling/response format → Zod validation → auth → company/branch/user → brand/category → product → productUnit → product approval → supplier/purchase → stock/transfer → sales → RMA/supplier claims → reports → AI service.
