# Environment inventory

Status: planned inventory. Exact variable names and scopes must match the SDK versions chosen in phase one. No provider values are present in this repository.

| Purpose                 | Expected configuration                                                            | Where it belongs                                                       |
| ----------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Marketing canonical URL | Public site URL, companynerve.com in production                                   | Marketing public config                                                |
| Starter canonical URL   | Per-environment application URL and callback URI                                  | Starter config                                                         |
| Convex client           | Deployment URL                                                                    | Starter public env                                                     |
| Convex deploy           | Deployment credential if CI needs it                                              | Restricted CI/deployment secret                                        |
| WorkOS                  | Client ID, API key, session encryption secret, webhook verification key when used | Public client ID only where SDK requires; all other values server-only |
| Stripe                  | Test/live API key, webhook signing secret, environment-specific price IDs         | Starter server env and backend secret store as needed                  |
| Email, if added         | Sender/domain settings, API credential                                            | Server env; separate environment/test recipients                       |
| Observability, if added | Project endpoint, server token where needed, redaction policy                     | Scope to the service that sends events                                 |

No `.env.example` for a fake application is created in phase zero. During implementation, generate a precise placeholder-only inventory beside the actual runtime. Distinguish required-for-build, required-for-local-run, and optional integration variables.

Never copy `.env.local`, `.vercel`, deployment credentials, secret screenshots, or personal browser profiles into a template export. Avoid public-prefix variables for secrets. Mask values in setup diagnostics.

Development uses synthetic users and test billing. Preview uses isolated data and cannot mutate production. Production has separate secrets and narrowly scoped deployment access. Account IDs and URLs can be documented after setup; credentials cannot.
