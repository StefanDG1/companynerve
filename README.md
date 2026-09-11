# CompanyNerve

A free SaaS template for founders who want to understand, customize, and maintain what they ship.

**Status: implementation in progress. See [verification status](docs/status.md) for completed checks and remaining setup.**

CompanyNerve will bring together account access, organizations, subscriptions, an example product, and clear operating instructions. Five design recipes will let founders give their products different identities. Paid services may follow once separate products have been built and verified.

The intended public website is **companynerve.com**. CompanyNerve-authored source is MIT licensed. Bundled third-party material retains its original terms.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev:marketing
```

Open http://localhost:3000 for the website and five design options. Follow [local development](docs/local-development.md) to configure Convex/WorkOS and run the starter on port 3001.

## What is included

- Separate Next.js marketing and starter applications.
- WorkOS sign-in and verified-user provisioning.
- Convex organizations, roles, invitations, projects, audit records, exports, and deletion.
- Stripe checkout/portal, verified webhook processing, entitlement refresh, and a protected sample report.
- Five shared design recipes. Cobalt workshop is provisional; the owner will refine the final style later.
- Documentation, ten local coding skills, a starter export command, and focused backend tests.

```sh
pnpm typecheck
pnpm test
pnpm build
pnpm template:export -- --name my-product --out ../my-product
```

Read the [current verification status](docs/status.md) before deploying with real customers. Provider configuration is separate from passing local checks. See the [documentation index](docs/README.md).

## Repository boundaries

CompanyNerve's eventual marketing site and starter live here. Future products such as LaunchProof and AccessProof get their own repositories, deployments, and designs. Only released, verified integrations are added to this template. See [future products](docs/future-products.md).

Read [CONTRIBUTING.md](CONTRIBUTING.md), [AGENTS.md](AGENTS.md), and [SECURITY.md](SECURITY.md) before making changes. Licensing status is in [LICENSE.md](LICENSE.md); bundled skill notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
