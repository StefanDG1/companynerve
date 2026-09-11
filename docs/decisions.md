# Decisions

Current decisions recorded 2026-09-11. These reflect the owner's latest instructions and supersede the initial planning-only/private-repository choices.

| Decision                                                                                               | Source                                                  |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| CompanyNerve; companynerve.com; C:\Code\CompanyNerve; StefanDG1/companynerve                           | Owner                                                   |
| Public repository; MIT for CompanyNerve-authored code                                                  | Owner's later open-source decision                      |
| Free template, paid services later                                                                     | Owner                                                   |
| Full implementation, commits/pushes, browser testing and provider setup authorized                     | Owner's later instructions                              |
| Cobalt workshop selected; basic shadcn-compatible styling; retain all five recipes                     | Owner                                                   |
| Keep existing hosting plans and unrelated products                                                     | Owner; no capacity reason to remove anything arose      |
| Ten selected global skills copied unchanged with supporting files/notices                              | Owner; remaining rights review is the owner's follow-up |
| Future products have separate repositories, deployments and designs; integrate only after verification | Owner                                                   |
| WorkOS identity; Convex application memberships; direct Stripe billing projection                      | Implementation decision, ADR 0002                       |
| Marketing on Vercel with Namecheap DNS; starter verified locally against dedicated staging services    | Implemented deployment boundary                         |

## Open owner decisions

Choose the first separate product and its customer problem after reviewing the starter. Resolve any unclear third-party skill redistribution rights. Before accepting real customers, establish the product's legal/support identity, retention policy, production environments and any live billing/tax requirements.

No further template implementation approval is pending. Future paid services remain outside this repository's current scope.

## Shared hosted application and search setup

The owner requested production accounts and Google sign-in, and clarified that SEO setup means Google Search Console. Google Cloud is used separately for the OAuth client required by Google sign-in. The hosted business and exported product share the same auth, billing, and dashboard source. Exports include the website with product configuration. The business remains a free template with paid services later; no live paid offer is introduced. Production credentials are excluded from previews.
