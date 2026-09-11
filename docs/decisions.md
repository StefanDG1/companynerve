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

## Passwordless authentication and independent product credentials

On 2026-09-11 the owner explicitly chose email one-time codes and Google OAuth only, with password login disabled, for CompanyNerve and its generated apps. This supersedes earlier email/password setup instructions and provider checks. Hosted AuthKit supplies both methods; the WorkOS environment must enable Magic Auth and Google and disable all other methods. Do not promote password creation or reset flows.

Each generated product provisions its own WorkOS environment and Google OAuth client, consent branding, callback URLs, and session secret. Shared template code never implies inherited suite credentials. Provider configuration and completed authentication remain separate verification steps; repository environment values cannot confirm either. See [authentication setup](operations/authentication.md).

The current repository task covers source/configuration guidance and local checks, with no commit, push, or browser/provider manipulation. After clarifying that its earlier confirmation covered only Services/LaunchProof, the main task separately confirmed CompanyNerve's own template/demo WorkOS dashboard settings. Production has Magic Auth and Google enabled, Email + Password and other methods disabled, and its own Google production credentials. Staging has Magic Auth enabled, Email + Password disabled, Microsoft/GitHub/Apple disabled, and Google enabled with WorkOS demo credentials for staging only. Exact environment/client identifiers and remaining checks are in [deployment](operations/deployment.md). Real email delivery, Google consent/callback completion, and the current public sign-in presentation remain unverified here. Vydero and Kinetexa remain untouched.

## CompanyNerve legal identity

The owner authorized English legal pages for CompanyNerve using company-published facts from exponentialeducation.ro privacy/terms plus the reused Stripe profile postcode: EXPONENTIAL EDUCATION S.R.L., CUI 54790758, Trade Register J2026035424002, EUID ROONRC.J2026035424002, Strada N. Istrati No. 6, Iași, 700460, Romania, and contact@exponentialeducation.ro. No independent registry validation was performed. The owner's local source record was read for company facts only; its education-product policies do not govern CompanyNerve.

The privacy policy describes the actual template website and hosted application. Terms preserve the MIT source license and describe the free alpha without introducing a paid offering. The legal notice exposes the published company identity through optional website operator configuration. Exports remove that identity and reset the support contact; CompanyNerve-specific terms are unavailable for generated products until their owners write their own terms.

Privacy-rights wording was checked against the [European Commission's information for individuals](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en), [EDPB transparency guidance](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en), and [ANSPDCP complaint guidance](https://www.dataprotection.ro/?page=Plangeri_pagina_principala). Exact provider retention periods, deployment regions, and transfer agreements have not been verified in this repository task; the pages do not assert EU-only processing or a specific provider certification.

## Shared hosted application and search setup

The owner requested production accounts and Google sign-in, and clarified that SEO setup means Google Search Console. Google Cloud is used separately for the OAuth client required by Google sign-in. The hosted business and exported product share the same auth, billing, and dashboard source. Exports include the website with product configuration. The business remains a free template with paid services later; no live paid offer is introduced. Production credentials are excluded from previews.
