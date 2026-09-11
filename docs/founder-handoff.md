# Review and resume

The local checkout is `C:\Code\CompanyNerve`. The GitHub repository is [StefanDG1/companynerve](https://github.com/StefanDG1/companynerve), private. The owner has chosen a free template with paid services later.

## Review the concrete foundation

Read [decisions](decisions.md), [architecture](architecture.md), [plan](plan.md), and [acceptance criteria](acceptance.md). Open the [visual board](design/concepts.html) and compare the five directions. The recommended CompanyNerve direction is Cobalt workshop; the other four remain starter recipes.

To approve implementation, a message such as "Approve the CompanyNerve template plan. Use Cobalt workshop for the marketing site and build all five starter recipes" supplies the missing phase approval. Until then, only planning/review changes are in scope.

Licensing can remain open through private implementation, but it must be selected before the free public release. Private repository visibility remains in effect until explicitly changed.

## Start an approved implementation session

Open `C:\Code\CompanyNerve` as the project. Read `AGENTS.md`, `docs/status.md`, and the newest explicit owner instructions. Record the approval in `docs/decisions.md` without inventing a date or scope. Implement phase one, update the phase-zero validator deliberately, and retain passing checks for document links and skills.

No global skill installation is needed to read the bundled instructions. Browser work needs Browser Harness or a documented equivalent available tool. Secrets and provider logins are handled separately.

## Provider access later

Namecheap is open for the domain owner. GitHub browser access worked during setup. Convex, WorkOS, Vercel, and Stripe access are not yet established for CompanyNerve. Request the relevant login only when the approved working build needs it. Ask the owner to complete authentication/consent screens themselves and keep credentials out of Git.

Use the [deployment runbook](operations/deployment.md) when the site is ready for a real deployment. Do not configure DNS against a nonexistent deployment.
