# Deploy CompanyNerve after implementation

This is a runbook for a future approved build. No Vercel, Convex, WorkOS, Stripe, or DNS connection is configured by this planning phase. Namecheap was opened at the owner's request.

## Before provisioning

1. Confirm the approved release commit and that the marketing build works without private backend credentials.
2. Identify the owner's intended provider accounts and regions. Check current plan terms and any budget before enabling paid resources.
3. Gather account access through existing CLI credentials or signed-in dashboards. Ask the owner to complete passwords, MFA, and consent screens. Never collect passwords in repository files or chat.
4. Record nonsecret project IDs, environments, and owners after provisioning. Store credentials only in local ignored files or provider secret stores.

## GitHub

The repository is `StefanDG1/companynerve`, private, with `main` as its intended primary branch. Push the foundation and verify its workflow. Git's existing credential manager can authenticate Git operations even when `gh auth status` is signed out.

After implementation, add a required CI check and branch protection if the account plan supports private-repo rules. Verify enforcement rather than assuming a saved rule works. Use least-privilege Actions permissions and pinned third-party action commits. Enable available dependency/secret security features deliberately. Do not change visibility without explicit owner authorization.

Mark the repository as a GitHub template only when the exported starter is usable, or publish a dedicated distribution repository after a release decision. This planning repo is not advertised as a ready-to-use template.

## Convex and WorkOS

Create a dedicated starter/demo Convex project. Use separate development and production deployments. Choose standard or Convex-managed WorkOS integration using current official setup instructions. Configure exact localhost/preview/production redirect URIs and token issuer/audience requirements. Avoid broad wildcard callback origins.

Verify sign-in, sign-out, organization creation, switching, invitation acceptance, and revocation against the actual backend. Record the membership freshness guarantee. Do not reuse production credentials from Kinetexa or Vydero.

Reference: [Convex AuthKit setup](https://docs.convex.dev/auth/authkit/add-to-app). Recheck its current instructions when executing this runbook.

## Stripe

Use test mode first. Implement the billing-authority decision from [contracts](../contracts.md). Register the actual webhook URL and only the event types used by the chosen integration. Record test-mode product/price IDs in environment configuration, not company-config source. Validate replay and cancellation before any live-mode setup.

The CompanyNerve template is free. The starter's sample Stripe flow demonstrates subscription handling for the founder's product. It is not a CompanyNerve paid-service sale. No CompanyNerve live prices are required in this phase.

## Vercel

Create a CompanyNerve marketing project rooted at `apps/marketing` after that directory exists. Create a separate starter/demo project rooted at `apps/starter` if required. Set their build commands from the tested workspace scripts. Keep marketing independent of Convex, WorkOS, and Stripe secrets.

Use isolated preview credentials and a deliberate indexing/access policy. Verify auth redirects and webhook endpoints on the intended canonical hostname. Record the release commit and provider deployment URL after a successful build.

## Namecheap and companynerve.com

1. Sign in to [Namecheap](https://www.namecheap.com/myaccount/login/) and locate companynerve.com.
2. Inspect its current nameservers and DNS records. Export or record the current nonsecret record set before edits. If DNS is hosted elsewhere, configure records at the authoritative host.
3. Add companynerve.com and www.companynerve.com to the marketing project in Vercel.
4. Read the exact DNS targets shown for that project at setup time. Do not use a remembered Vercel IP or generic CNAME.
5. Add or update only the required website records. Preserve MX, email verification, SPF/DKIM/DMARC, and unrelated TXT records. Resolve any apex/www conflict deliberately.
6. Verify provider domain ownership, DNS resolution, certificate issuance, and the chosen canonical redirect. Default canonical is the apex, with www redirecting to it.
7. Smoke-test links, forms, metadata, and redirects at the public domain. Record before/after records and rollback steps without secrets.

Do not move nameservers merely to host the site on Vercel. Keep registration and DNS ownership under the founder's control.

## Launch and rollback

Publish only the features supported by the current release. If no data is collected, do not add a pretend waitlist. If collection is added, first implement consent, storage, deletion, and accurate privacy copy for that actual flow.

Retain the previous working deployment. Verify how to restore it and how to revert the specific DNS change. Database schema changes require a compatibility/backup plan; reverting a web deployment does not automatically reverse data changes. Record the final acceptance results in `docs/status.md`.
