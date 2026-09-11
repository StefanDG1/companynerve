# Updating a generated product

Keep your product in its own repository. Record the CompanyNerve version from `template-version.json`. Before an update, commit your product changes and create a branch.

Compare the old template tag with the desired tag in CompanyNerve. Read the changelog and security changes first. Apply backend authorization, schema, SDK and configuration changes deliberately; preserve your branding and domain logic. Review changes to `.agents/skills` separately and update hashes only after accepting the source update.

Install from the updated lockfile, run affected type checks and boundary tests, and build. Deploy into isolated preview services. Check sign-in, organization access, billing transitions and any schema migration there before production. Keep the previous web deployment for rollback; database changes need their own compatibility and backup plan.

The first release is an alpha. There is no automatic merge/update service or compatibility promise across prerelease changes. Future breaking changes must include migration notes.
