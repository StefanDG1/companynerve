# Plan of action

The owner approved application work on 2026-09-11 after the foundation draft. Each phase ends with evidence and a status update. Dates and effort estimates are deliberately omitted until the design and account setup are known.

| Phase                          | Deliverable                                                                                     | Depends on                                          | Completion evidence                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| 0. Review foundation           | Private repo, documents, ten skills, five static design concepts, foundation CI                 | Current authorization                               | Committed files, validator result, remote commit, design ballot                  |
| 1. Prove the integration       | Minimal Next.js/Convex/WorkOS path with explicit organization context; choose billing authority | Owner implementation approval                       | Two-user/two-org spike, package lockfile, recorded provider/auth choice          |
| 2. Build the starter           | Sample project CRUD, onboarding, membership roles, billing sandbox, settings, config validation | Phase 1                                             | Behavioral tests for the complete founder/customer journey                       |
| 3. Deliver five recipes        | Tokens plus distinct marketing, auth, app, form, table, empty/error/loading states              | Phase 2; marketing vote                             | Desktop/mobile screenshots and keyboard/accessibility review for every recipe    |
| 4. Build the CompanyNerve site | Selected marketing design, design gallery, accurate feature/docs content, real CTA              | Approved design; verified starter features          | Responsive preview, working links, metadata, no unavailable-feature claims       |
| 5. Package and deploy          | Fresh product export, setup docs, isolated provider projects, custom domain                     | Phases 2-4; required accounts and release decisions | Fresh-clone walkthrough, passing checks, HTTPS/DNS verification, rollback record |
| 6. Release the free template   | Licensed tagged release, security contact, changelog, upgrade guide                             | Public-distribution decision and acceptance pass    | Public release only when explicitly authorized; repeatable use by a new founder  |

## Phase 1 details

Choose exact compatible Node/pnpm/Next.js/React/provider versions from current supported versions. Pin the package manager and lockfile. Create only the packages the example consumes. Add TypeScript checks and relevant CI before broad UI work.

Use official AuthKit integration instructions. Compare standard and Convex-managed WorkOS accounts against the owner's existing setup. Test organization switching and membership revocation before designing the full settings UI. Resolve direct Stripe projection versus WorkOS entitlements with a small sandbox experiment.

## Phase 2 details

Implement one vertical journey: sign up, create an organization, create a project, invite a member, reject a cross-organization read, upgrade in test mode, access a paid example action, and remove that access at the configured cancellation boundary. Add safe export/deletion for the example data. Every page gets a meaningful loading, empty, error, and unavailable-integration state.

## Phase 3 details

Implement all five design recipes against the same behavior and data. Voting chooses CompanyNerve's primary identity, not whether the other four recipes exist. A recipe changes composition and density, not only CSS color variables. Each new product can change its chosen recipe independently.

## Phase 4 details

Build only claims backed by the current release. Before public template access is available, use preview/documentation actions. After release, use "Get the free template". Paid-services material stays a clearly labeled future direction with no checkout or invented prices.

## Phase 5 details

Provision the minimum services after the app runs locally. Marketing goes to companynerve.com. Use a separate protected demo deployment initially; add `demo.companynerve.com` only if a public demo is approved and isolated. Follow the [deployment runbook](operations/deployment.md). Test export into a sibling scratch folder with fresh configuration and no CompanyNerve secrets.

## Work after the template

Choose one separate product, probably LaunchProof or AccessProof, based on user demand and the owner's goal. Do not create its repo in this phase. [Future-product policy](future-products.md) defines release and integration requirements.
