# Run your copy locally

Use Node.js 24 and pnpm 11.15.1. Install with `pnpm install --frozen-lockfile` from the repository root.

## Marketing and design previews

In the CompanyNerve source repository, run `pnpm dev:marketing` and open http://localhost:3000. The five landing pages are under `/designs`. Marketing is excluded from a generated product.

## Authenticated starter

1. Run `pnpm convex:dev`. Choose a new project in your own Convex account. The CLI creates an ignored root `.env.local`.
2. Create a dedicated WorkOS project/environment. Configure AuthKit with the exact redirect `http://localhost:3001/callback` and homepage `http://localhost:3001`. Enable the authentication methods you intend to offer.
3. Add `WORKOS_CLIENT_ID` and `WORKOS_API_KEY` to the ignored root `.env.local` from that WorkOS environment.
4. Set the same variables in the matching Convex deployment. Use `pnpm exec convex env set NAME` and pipe the value on stdin, or a temporary ignored environment file. Never paste a secret into shell history or a committed file.
5. Run `pnpm setup:local`. It writes `apps/starter/.env.local` and generates a session-encryption secret. It preserves that secret on repeat runs.
6. Run `pnpm dev` and open http://localhost:3001. Create a verified account. Create a workspace and a project.

Keep `pnpm convex:dev` running while changing the backend. The CLI updates generated types. Commit `convex/_generated` without environment values. WorkOS authenticates users; Convex owns organizations and roles. WorkOS SSO organization synchronization is not implemented.

## Stripe test billing

Set `STRIPE_SECRET_KEY`, `STRIPE_PRO_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_MODE=test`, and `APP_URL=http://localhost:3001` in the Convex development deployment. Create a recurring test-mode price and configure the customer portal. Register the Convex HTTP endpoint `/stripe/webhook` for checkout completion, subscription lifecycle, invoice paid, and invoice payment failure events.

Open a workspace's Billing page as its owner. The provider shows the actual price and currency. Return from checkout, refresh billing, and try the Pro report. Cancel using the portal and refresh again. Only the backend's verified state grants access.

Billing is optional for ordinary Free-plan product use. Without Stripe settings, the billing action returns an integration error rather than a fake successful checkout. The default maximum is three Free projects or 100 Pro projects. There are at most 50 members and ten organizations per user.

## Verification

Run `pnpm typecheck`, `pnpm test`, and `pnpm build`. The eight backend tests use synthetic users and do not need provider accounts. They verify cross-organization access, roles/invitations, revocation, quotas, deletion, and payment boundaries. A build is not verification of a hosted provider configuration.

## Create a new product

Run `pnpm template:export -- --name my-product --out ../my-product`. The output path must not exist and must be outside the source repository. The export preserves source, docs, skills, tests, and a lockfile, but omits marketing, secrets, and local provider configuration.

Run a fresh install and build from the exported directory. Change `packages/company-config/index.ts`, then provision your own provider projects. Do not reuse CompanyNerve's environment values or accounts.
