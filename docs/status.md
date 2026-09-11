# Verification and release status

Updated 2026-09-11. CompanyNerve is a public alpha template with a live marketing site. The owner selected Cobalt workshop. This record separates implementation from checks actually performed.

## Available now

- [Website](https://companynerve.com), [five designs](https://companynerve.com/designs), and [public repository](https://github.com/StefanDG1/companynerve).
- GitHub template flag, MIT for authored source, private vulnerability reporting, issue/PR templates and CI.
- Separate marketing/starter applications; identity, organizations, roles, invitations, sample projects, quotas, audit records, exports/deletion, Stripe billing example and five design recipes.
- Founder setup, exact environment inventory, architecture/contracts, research/repository assessment, future-product plan, operations and upgrade instructions; ten unchanged skill snapshots.

## Verified

| Boundary             | Evidence                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Source checks        | `pnpm check` passed validation, TypeScript, nine focused backend tests and both production builds. The subsequent account-route/sign-out fixes also passed the starter production build and browser regression checks.                                                                                                               |
| Backend tests        | Anonymous/cross-organization access, invitation ownership/reuse/expiry, roles/revocation/final-owner rule, concurrent quota enforcement, isolated organization deletion, stale/expired/replayed billing, signed/forged/wrong-mode webhooks, key/mode mismatch, and expiry cleanup behind active records.                             |
| Fresh copy           | A fresh exported starter installed with the frozen lockfile, typechecked and built without credentials. A second export verified corrected product name/slug, all documentation links, skill hashes, and placeholder-only environment files.                                                                                         |
| Identity and product | Synthetic verified WorkOS staging identity signed in through the browser, bootstrapped in Convex, created a workspace and project, and signed out back to the local app.                                                                                                                                                             |
| Billing              | Real Stripe sandbox Checkout with the standard test card; signed webhook changed Free to Pro; paid report returned 200. Dedicated portal scheduled cancellation at the period boundary, retaining Pro. Ending the synthetic test subscription delivered revocation; the report returned 403 and UI returned to Free. No live charge. |
| Data                 | Organization export returned 200; deleting the synthetic workspace removed it from the chooser. Account export returned 200 after fixing proxy coverage. Account deletion removed the staging WorkOS identity.                                                                                                                       |
| Marketing            | Homepage, gallery, docs, privacy, robots and sitemap returned 200. All five landing recipes had no horizontal overflow at 1440, 390 and 320 CSS pixels. Representative desktop/mobile screenshots reviewed; button contrast corrected.                                                                                               |
| Domain               | Public DNS resolves to the provider's current targets; valid HTTPS serves companynerve.com. www returns 308 to the apex. Mail records preserved.                                                                                                                                                                                     |
| Secrets and guidance | Current tracked/untracked deliverable files checked against the actual setup secrets: no matches. Ten copied skill snapshots pass SHA-256 integrity validation.                                                                                                                                                                      |

Earlier defects found during browser verification were fixed: shared CSS overrode button text colors, account export missed AuthKit proxy coverage, and account deletion attempted provider logout after deleting the identity. Stripe mode display now comes from the backend, and mismatched key/environment configuration is rejected before provider calls.

## Dependency refresh and Cobalt selection

On 2026-09-11 the owner selected Cobalt workshop. Marketing copy, the gallery and planning documents record that choice. The other four recipes remain available.

After upgrading to TypeScript 7.0.2, pnpm 12.3.4 and the versions in [the upgrade notes](upgrading.md), `pnpm check` passed document/skill validation, workspace type checks, all nine backend tests and both production builds. The Convex-specific TypeScript configuration also passed. A new export installed with `--frozen-lockfile`, typechecked and built without credentials. `pnpm -r outdated --format json` returned no outdated direct packages, and `pnpm audit --json` reported zero known vulnerabilities at the time of the check.

Browser checks against local production builds confirmed the selected Cobalt notice, all five gallery links and no horizontal overflow on the gallery/Cobalt preview at desktop and 390-pixel widths. The Cobalt desktop screenshot was reviewed. The starter homepage rendered and its sign-in link reached WorkOS staging. Full authenticated CRUD and Stripe sandbox flows listed above were verified before this dependency refresh and were not repeated for this update.

CI and marketing deployment results are recorded per commit in GitHub checks and the Vercel deployment history. The local results above do not substitute for those hosted checks.

## Deliberate alpha limits

- A separate production backend and hosted starter deployment now exist. Custom-domain DNS and full authenticated production browser verification remain pending. There is no live payment offering.
- Membership invitations are shareable links, not delivered emails. WorkOS owns identity; no WorkOS SSO organization synchronization is included.
- Cobalt workshop is selected; further visual polish remains possible. Comprehensive accessibility certification, field performance metrics and every browser/recipe/state permutation are not claimed.
- Backup/restore rehearsal, provider-outage drills, production monitoring, live tax setup and a product-specific retention/legal/support policy remain before real customers. Failed identity deletion jobs require an operator after five retries.
- Copied skills retain their original contents/notices. The owner deferred resolution of unclear redistribution rights; the MIT license does not relicense third-party material.
- Future services and standalone products remain separate work. No existing hosting plan or unrelated product was changed.

See [the deployment runbook](operations/deployment.md), [acceptance checklist](acceptance.md), and [next steps](plan.md). A template release does not certify a founder's subsequent deployment.

## Production setup in progress

On 2026-09-11, the production Convex backend deployed, and Vercel created the separate `companynerve-app` deployment from the existing source. Production WorkOS has email/password and a dedicated Google OAuth client enabled. The Google OAuth audience is published. Six app environment values are scoped to Production, with the public URLs stored as configuration and credentials stored as secrets.

Pending: Namecheap login to add the app CNAME and Search Console verification TXT, followed by domain/HTTPS checks, Search Console verification and sitemap submission, and complete authenticated production browser verification. Google OAuth configuration is not evidence that a user completed Google sign-in. PR #2 was closed as an unnecessary Node type major upgrade; runtime-aligned dependency policy is being committed. No hosting plan changed.

Source work adds shared product website export, configuration-driven branding, optional-billing availability, SEO metadata, and launch/SEO skills. Validation and deployment of these source changes are recorded separately after checks run.

### Checks for the shared website export

`pnpm check` passed document/skill validation, workspace type checks, all 10 focused backend tests, and both production builds. A fresh export installed with the frozen lockfile and built both applications without credentials. Browser inspection confirmed exported product branding, placeholder-only links, canonical URL, WebSite JSON-LD, and no horizontal overflow at desktop and 390 pixels. A subsequent footer wording change distinguishes the template source license from a future product license.

The updated Convex production functions deployed successfully. Its health route returned 200, an unsigned Stripe webhook returned 400, and an unauthenticated identity action returned an error. No authenticated production journey is claimed. The working source passed a scan against the actual configured secret values. GitHub reported no open pull requests.

The website/application source changes are prepared on `production-launch` while DNS access is pending. They are not yet promoted to the public marketing site, so the live homepage does not advertise signup on an unresolved app domain.
