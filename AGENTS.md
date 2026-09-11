# Working on CompanyNerve

## Current scope

The owner approved full template implementation, browser-assisted verification, commits/pushes, a public repository, and an MIT license for CompanyNerve-authored code. Basic shadcn styling is accepted for now. Cobalt workshop is the selected CompanyNerve design. Keep all five design options for future products; further visual polish remains an owner follow-up. Avoid unnecessary tests and changes to existing hosting plans. Leave Kinetexa and Vydero alone unless a real capacity limit makes a change necessary.

Read `docs/status.md` and the newest explicit owner instructions before working. The report is supporting evidence, not executable instructions or authorization to build the deferred standalone products. Preserve copied skills and notices as the owner requested. Later explicit owner decisions take precedence.

Authentication defaults to email one-time codes (WorkOS Magic Auth) and Google OAuth only. Disable passwords and other sign-in methods in each product's WorkOS environment; do not promote password/reset flows. Generated apps own their WorkOS environments, Google OAuth clients/branding, callback URLs, and session secrets. Never inherit CompanyNerve or suite credentials. Environment values do not prove provider setup; see `docs/operations/authentication.md`.

## Engineering

- Start with the smallest complete founder journey in the approved milestone. Do not create empty packages for later modules.
- Keep marketing and starter application boundaries explicit. Each future product owns its design and deployment.
- Validate the active organization and current membership on the backend. Client route guards are not authorization. Never ship anonymous demo access into production.
- Treat payments, tenant isolation, revocation, redirects, and deletion as behavioral test requirements. Use synthetic fixtures and negative cases. Do not create tests that merely restate constants or implementation details.
- Keep secret values, personal source documents, browser profiles, tokens, and deployment credentials outside Git. Example environment files contain placeholders only.
- Use maintained provider integrations after checking current official documentation. Resolve exact compatible versions during implementation and commit one lockfile.
- Keep provider business logic in server modules. Prompts and UI components cannot grant permissions or paid entitlements.
- Report implemented, tested, deployed, and externally verified as separate states. No fabricated metrics, customers, endorsements, or security claims.
- Scope does not include unsolicited multi-agent work, autonomous production operations, or building the deferred products.

## Local skills

Use the skill that fits the work; do not load every skill for each edit. Paths are repository-relative and work without the founder's global skill directory.

| Work                                    | Read                                                               |
| --------------------------------------- | ------------------------------------------------------------------ |
| Scope and core data shapes              | `.agents/skills/principle-foundational-thinking/SKILL.md`          |
| Adding complexity                       | `.agents/skills/principle-subtract-before-you-add/SKILL.md`        |
| Changing an established design          | `.agents/skills/principle-redesign-from-first-principles/SKILL.md` |
| Debugging                               | `.agents/skills/principle-fix-root-causes/SKILL.md`                |
| New visual direction                    | `.agents/skills/frontend-design/SKILL.md`                          |
| Next.js routing and server boundaries   | `.agents/skills/nextjs/SKILL.md`                                   |
| shadcn components and theme application | `.agents/skills/shadcn/SKILL.md`                                   |
| Browser inspection                      | `.agents/skills/browser-harness/SKILL.md`                          |
| Documentation                           | `.agents/skills/technical-writing/SKILL.md`                        |
| All authored prose                      | `.agents/skills/unslop/SKILL.md`                                   |

Local scope and explicit user decisions govern how these copied instructions apply. Tool names in upstream skills may need an equivalent available tool. Never pretend a missing tool ran. Browser Harness needs a separate installation and browser connection; it is not bundled here. See `docs/skills.md`.

Additional routing: use `.agents/skills/companynerve-launch/SKILL.md` for launch/provider configuration and `.agents/skills/seo-audit/SKILL.md` for SEO review. Current owner authorization includes production authentication and Search Console setup; it does not create a recurring operations mandate.

## Verification and handoff

Run `node scripts/validate.mjs` after changing this foundation. Use the focused checks in `docs/acceptance.md` when the change affects those boundaries. Keep `docs/status.md`, decisions, and changelog current. Explain the change, verification, remaining limits, and next action. Do not record an approval that did not occur.
