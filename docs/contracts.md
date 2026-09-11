# Proposed domain contracts

The runtime schema lives in `convex/schema.ts`; company settings live in `packages/company-config/index.ts`. Some extension shapes below remain future design specifications. ADR 0002 supersedes the initial membership-projection design: application memberships live in Convex, and no WorkOS organization sync is implemented.

## Company configuration

| Field           | Shape and validation                                               | Consumer                                   |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------ |
| `schemaVersion` | Literal version, initially 1; reject unknown versions              | Config loader                              |
| `product`       | Stable slug, display name, canonical URL; HTTPS for production     | Brand and route metadata                   |
| `roles`         | Unique owner/admin/member identifiers                              | Server permission policy and membership UI |
| `entitlements`  | Named capabilities, separate from role permissions                 | Billing policy and server feature checks   |
| `plans`         | Stable IDs, entitlement IDs, nonnegative limits; no live price IDs | Plan policy and test fixtures              |
| `resources`     | Stable IDs, owner type, data classification, permitted actions     | Backend implementation guide and tests     |
| `journeys`      | IDs and descriptions linked to actual test files                   | Release checklist                          |
| `invariants`    | IDs, human-readable rules, responsible test IDs                    | Traceability, not automatic proof          |
| `brandRecipe`   | One of the five shipped recipe IDs                                 | Presentation layer                         |

Reject duplicate IDs and references to missing roles, plans, or entitlements. Keep provider keys and environment-specific Stripe price IDs outside this configuration. A role answers who may act; an entitlement answers which purchased capability is available. Neither replaces the other.

## Tenancy and data

| Entity                   | Minimum fields and constraints                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| User                     | Internal ID, unique WorkOS subject, active/suspended/deleting state                                                  |
| Organization             | Internal ID, unique WorkOS organization ID, display name, lifecycle state                                            |
| Membership projection    | Organization ID, user ID, role, active/revoked state, provider event/version metadata; unique pair                   |
| Project                  | ID, organization ID, name, creator ID, timestamps; index by organization                                             |
| Billing account          | Organization ID, unique Stripe customer/subscription IDs, status, plan ID, period boundary, synchronization metadata |
| Processed provider event | Provider, environment, event ID, processing state; unique composite key                                              |
| Audit event              | Organization, actor, action, target, outcome, timestamp, correlation ID; no secret payload                           |

WorkOS owns identity and membership lifecycle. A server projection can support queries, but stale membership cannot authorize a sensitive action indefinitely. Define and test the maximum propagation window during implementation. Require a provider refresh or reject a sensitive operation when that guarantee cannot be met.

Derive the acting user from a verified token. Match the requested active organization to a current membership. Check organization ownership when reading a record by ID, writing it, listing it, exporting it, or requesting a file URL. Check role, entitlement, lifecycle state, and limits independently. Never select the first organization silently.

Personal products can start with a one-person organization. This avoids maintaining a second authorization system. Do not infer organization membership from an email domain.

## Billing boundary

Stripe is the authoritative source of billing state. Phase one chooses either a direct Stripe-to-Convex entitlement projection or WorkOS-managed entitlement sync. Do not run two independent authorization authorities for the same capability.

Verify raw webhook bodies and signatures. Separate test/live event handling. Make processing idempotent and recoverable after partial failure. Old events must not roll current access backward or restore canceled access. Success-page navigation cannot grant paid access. Test the cancellation boundary, failed payment policy, refresh/reconciliation, and environment mismatch.

## Future product integration

A future adapter manifest describes `id`, `version`, `supportedTemplateRange`, `supportedContractVersions`, capabilities, required permissions, supported environments, setup instructions, and disconnect behavior. It also identifies the repository, released artifact, and verification evidence.

Adapters call supported APIs or install a narrow package; they do not import an entire sibling repository. A disabled or absent adapter cannot affect the base signup and product journey. No runtime loading of arbitrary code from untrusted URLs.

## Evidence for later integrations

Reserve a result shape with a schema version, check ID, adapter version, template version, commit/deployment ID, organization/environment, start/end timestamps, expected and observed outcomes, and redacted artifact references. Outcomes include pass, fail, skipped, error, and unknown. Skipped or unknown must not appear as pass.

Record synthetic examples as examples. Retention, storage encryption, access controls, and deletion requirements are part of any future hosted evidence product. There is no central evidence warehouse in the starter.

## Connector and action boundaries

Document each provider's purpose, credential owner, minimum scopes, environment, supported reads/writes, revocation, and health check. Use provider consoles to hold secrets. The first template does not store customers' third-party credentials.

Future actions need an actor, organization, environment, capability, target, preview, idempotency key, and audit outcome. Production writes, purchases, bulk sends, and deletion require explicit policy and authorization. This is an integration requirement for a future service, not an implemented agent approval engine.
