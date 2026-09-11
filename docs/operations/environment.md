# Environment inventory

No credentials are required to install, typecheck, run the synthetic tests, or build either application. Runtime sign-in requires the starter and Convex settings below. Marketing requires none.

| Variable                        | Scope                                 | Purpose                                                      |
| ------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| CONVEX_DEPLOYMENT               | Root local CLI                        | Selected development deployment; created by Convex CLI       |
| NEXT_PUBLIC_CONVEX_URL          | Starter; root local setup             | Public Convex cloud URL                                      |
| WORKOS_CLIENT_ID                | Starter server and Convex             | AuthKit client and token verifier                            |
| WORKOS_API_KEY                  | Starter server and Convex             | Identity operations; secret                                  |
| WORKOS_COOKIE_PASSWORD          | Starter server only                   | At least 32 random characters for encrypted sessions         |
| NEXT_PUBLIC_WORKOS_REDIRECT_URI | Starter                               | Exact callback URL registered with WorkOS                    |
| APP_URL                         | Starter and Convex                    | Canonical application origin for invitations/billing returns |
| STRIPE_MODE                     | Convex                                | Expected webhook environment: test or live                   |
| STRIPE_SECRET_KEY               | Convex                                | Stripe server key; optional for Free use                     |
| STRIPE_PRO_PRICE_ID             | Convex                                | Recurring price for the sample Pro plan                      |
| STRIPE_PORTAL_CONFIG_ID         | Convex                                | Optional dedicated customer-portal configuration             |
| STRIPE_WEBHOOK_SECRET           | Convex                                | Signature verifier for this deployment's endpoint            |
| CONVEX_DEPLOY_KEY               | Restricted deployment secret, if used | Deploy a founder's own backend; never needed by marketing    |

Root `.env.example` and `apps/starter/.env.example` contain placeholders. `pnpm setup:local` copies required local values and creates a session secret, preserving it on reruns. Store provider credentials in ignored local files and provider environment stores, never source, logs or chat.

Use separate development, preview and production data. The public CompanyNerve marketing site has no access to starter credentials. Each exported product must provision its own services. Review [deployment](deployment.md) before production.

The billing UI reads its mode from Convex. The backend rejects a Stripe key whose test/live prefix does not match STRIPE_MODE, before issuing a provider request.

## Website configuration

Marketing optionally accepts `NEXT_PUBLIC_SITE_URL` to override the configured canonical origin and `GOOGLE_SITE_VERIFICATION` for a Search Console URL-prefix HTML token. Domain properties use a DNS verification record instead. Neither value is an authentication credential. Vercel supplies `VERCEL_ENV`; Preview emits noindex and disallows crawlers. Configure production app values only in Production; provision separate services before enabling authenticated previews.
