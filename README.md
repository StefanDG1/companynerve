# CompanyNerve

A free SaaS template for founders who want to understand, customize, and maintain what they ship.

**Public alpha. [Website](https://companynerve.com) � [Five design options](https://companynerve.com/designs) � [Verification status](docs/status.md).**

CompanyNerve brings together account access, organizations, subscriptions, an example product, and clear operating instructions. Five design recipes let founders give their products different identities. Paid services may follow once separate products have been built and verified.

The intended public website is **companynerve.com**. CompanyNerve-authored source is MIT licensed. Bundled third-party material retains its original terms.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev:marketing
```

Open http://localhost:3000 for the website and five design options. Follow [local development](docs/local-development.md) to configure Convex/WorkOS and run the starter on port 3001.

## What is included

- Separate Next.js marketing and starter applications.
- WorkOS email-code and Google sign-in with verified-user provisioning. [Configure these methods](docs/operations/authentication.md) with passwords disabled and each product's own OAuth credentials.
- Convex organizations, roles, invitations, projects, audit records, exports, and deletion.
- Stripe checkout/portal, verified webhook processing, entitlement refresh, and a protected sample report.
- Five shared design recipes. Cobalt workshop is the selected CompanyNerve design; all five remain available for new products.
- Documentation, twelve local skills, a website/application export command, and focused backend tests.

```sh
pnpm typecheck
pnpm test
pnpm build
pnpm template:export -- --name my-product --out ../my-product
```

Read the [current verification status](docs/status.md) before deploying with real customers. Provider configuration is separate from passing local checks. See the [documentation index](docs/README.md).

## Check access before launch

[Try LaunchProof's free local demo](https://launch.companynerve.com/docs). Its current CompanyNerve adapter checks anonymous private-project access, cross-workspace reads, and a declared paid feature. Local checks need no LaunchProof account; testing your own app requires compatible Convex project functions and authorized staging fixtures. Target credentials stay on your machine.

The [optional dashboard integration](docs/operations/launchproof.md) displays a scoped report summary. It defaults off and keeps your application's customers independent from CompanyNerve hosted-service accounts.

## Repository boundaries

CompanyNerve's marketing site and starter live here. LaunchProof has its own repository, deployment, and backend. Future products such as AccessProof follow the same separation. Only released, verified integrations are added to this template. See [future products](docs/future-products.md).

Read [CONTRIBUTING.md](CONTRIBUTING.md), [AGENTS.md](AGENTS.md), and [SECURITY.md](SECURITY.md) before making changes. Licensing status is in [LICENSE.md](LICENSE.md); bundled skill notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
