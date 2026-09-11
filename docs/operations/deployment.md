# Deployment and operations

## CompanyNerve deployment

The public marketing app is the Vercel project `companynerve-marketing`, rooted at `apps/marketing`, in the existing `stefandg1s-projects` team. The first successful deployment used commit `c28177a`. Git pushes to main trigger deployment. Marketing has no Convex, WorkOS or Stripe credentials. The existing Hobby plan was preserved; no unrelated project was removed.

The starter runs locally on port 3001 against a dedicated CompanyNerve Convex development project and a CompanyNerve WorkOS staging project. Its Stripe product, recurring price, portal and webhook are sandbox-only and separate from existing products. Runtime values are held in ignored local environment files and Convex environment settings. No public hosted starter demo or live billing configuration is claimed.

## Domain record and rollback

On 2026-09-11, Namecheap parking records were replaced with the exact targets shown by Vercel:

| Host | Before                                                | After                                      | TTL        |
| ---- | ----------------------------------------------------- | ------------------------------------------ | ---------- |
| @    | Unmasked URL redirect to http://www.companynerve.com/ | A 216.198.79.1                             | 30 minutes |
| www  | CNAME parkingpage.namecheap.com.                      | CNAME f92f7debe2587d09.vercel-dns-017.com. | 30 minutes |

Email Forwarding and the TXT value `v=spf1 include:spf.efwd.registrar-servers.com ~all` were preserved. Nameservers were not changed. Vercel connects the apex to Production and redirects www to the apex with HTTP 308.

For a website regression, promote the previous known-good deployment in Vercel. To reverse the domain migration itself, restore only the two prior website records above. Do not alter mail records. DNS rollback has propagation delay. A web rollback does not reverse database changes.

## Deploy your own starter

1. Export the starter and follow [local setup](../local-development.md). Provision services in your own accounts.
2. Create isolated development, preview and production Convex/WorkOS environments. Do not point preview at production data. Choose regions and plan limits deliberately.
3. Deploy the backend with the Convex CLI against the intended deployment. Set the environment variables from [the inventory](environment.md) in the correct server scope.
4. Create a separate Vercel project rooted at `apps/starter`. Use Node 24, the pinned pnpm version and the app's Next.js build command. Import the workspace lockfile, not an independent app lockfile.
5. Set the public Convex URL, WorkOS server credentials, a new random session secret, exact callback URL and canonical APP_URL. Register that callback and the absolute APP_URL as an allowed sign-out URI with WorkOS. Configure the same APP_URL in Convex for checkout returns.
6. If billing is needed, create your own test product/recurring price and a dedicated portal configuration. Register the Convex HTTP URL plus `/stripe/webhook` for checkout.session.completed, customer.subscription.created/updated/deleted, invoice.paid, and invoice.payment_failed. Configure its signing secret and test mode. Use a restricted API key with the necessary permissions where possible.
7. Check sign-in/out, organization creation/switching, invitation acceptance and revocation, a paid sandbox journey, cancellation and export/deletion. A successful build alone does not verify provider setup.
8. Before real customers, set production secrets, support/legal identity, retention and backup policy, monitor provider failures, and rehearse a restore into an isolated deployment. Configure live billing and tax only when the product requires it. CompanyNerve's free template does not require a live price.

## Background jobs and recovery

Convex runs billing reconciliation hourly. Paid access expires if verification is more than 24 hours old, so a prolonged provider outage fails conservatively. Inspect Convex logs and the billing projection; an owner can trigger a refresh after provider recovery.

Expired invitations and old rate-limit/event records are removed in indexed batches by the daily cleanup job. Organization deletion locks the organization before paged purging. User identity deletion retries five times; failed `deletionJobs` remain visible in the Convex dashboard. After resolving the WorkOS error, an operator can invoke internal `identity:finishDeletion` with that job ID from the authorized deployment console. Keep job IDs and credentials out of public reports.

Account deletion retains organization-authored content and audit references. Organization deletion purges organization-owned example data, but Stripe records are retained under the provider account's own retention rules. Set a product-specific policy before launch.

## Repository operations

The source is public, MIT for authored material, and enabled as a GitHub template. Private vulnerability reporting is enabled. CI uses read-only repository permissions and pinned action revisions. See [upgrading](../upgrading.md) before applying template changes to an existing product.
