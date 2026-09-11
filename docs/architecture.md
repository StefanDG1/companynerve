# Architecture

CompanyNerve has a public marketing site and a separate SaaS starter. Marketing builds without backend credentials. The starter uses server-rendered Next.js pages and server actions, with Convex enforcing data access.

```text
apps/marketing          CompanyNerve website and five landing previews
apps/starter            Example SaaS, workspace UI, account and billing
convex                  Data, identity bootstrap, authorization, billing, jobs
packages/company-config Validated brand, roles and plan limits
packages/design-recipes Five presentation recipes and shared styles
packages/ui             Small Radix/CVA, shadcn-compatible primitives
docs                    Setup, operating instructions, decisions and evidence
.agents/skills          Ten unchanged skill snapshots
```

## Request flow

WorkOS AuthKit handles sign-in and encrypted sessions. The Next.js server retrieves the user's access token and calls Convex through a request-scoped client. Convex checks the identity and current application membership for each operation. The browser cannot grant roles or paid access.

Stripe calls the Convex HTTP webhook. A verified event triggers a fresh Stripe read; the resulting entitlement projection is versioned and expires conservatively. See [contracts](contracts.md) and [membership decision](adr/0002-application-memberships.md).

## Stack

Node 24, pinned pnpm 11.15.1, Next.js 16.3.4, React 19.2.8, strict TypeScript, Tailwind, Zod, Convex 1.45, WorkOS AuthKit, and Stripe. Exact SDK versions live in the manifests and lockfile. A pnpm workspace is sufficient; no Turborepo layer is needed for this size.

Shared UI uses local source, native selects, and system fonts. The five recipes change density, typography and composition as well as colors. Styling remains provisional pending the owner's selection. Email delivery, uploads, telemetry, and generalized plugins are absent because no shipped journey needs them.

## Distribution

`pnpm template:export -- --name my-product --out ../my-product` copies the starter, backend, packages, documentation, tests, skills, and a reproducible lockfile. It omits marketing, local environment values, Git history, build output, and provider metadata. The exported product needs its own provider projects.

Founders own their copies. Updates are explicit diffs and migrations, never overwrites of customized applications. The version marker records the source release; see [upgrade guide](upgrading.md).
