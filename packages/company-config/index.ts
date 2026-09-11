import { z } from "zod";
export const recipeIds = [
  "cobalt",
  "studio",
  "signal",
  "garden",
  "folio",
] as const;
export const companySchema = z.object({
  schemaVersion: z.literal(1),
  product: z.object({
    slug: z.string().regex(/^[a-z][a-z0-9-]+$/),
    name: z.string().min(1).max(80),
    description: z.string().min(1),
  }),
  brandRecipe: z.enum(recipeIds),
  roles: z.tuple([z.literal("owner"), z.literal("admin"), z.literal("member")]),
  plans: z.object({
    free: z.object({ projects: z.number().int().min(1).max(100) }),
    pro: z.object({ projects: z.number().int().min(1).max(100) }),
  }),
});
export function defineCompany(value: z.input<typeof companySchema>) {
  return companySchema.parse(value);
}
export const company = defineCompany({
  schemaVersion: 1,
  product: {
    slug: "your-product",
    name: "Your product",
    description: "A place for your next useful idea.",
  },
  brandRecipe: "cobalt",
  roles: ["owner", "admin", "member"],
  plans: { free: { projects: 3 }, pro: { projects: 100 } },
});
export type Role = (typeof company.roles)[number];
export function isPaid(
  billing: { status: string; periodEnd: number; verifiedAt: number } | null,
  now = Date.now(),
) {
  return (
    !!billing &&
    ["active", "trialing"].includes(billing.status) &&
    billing.periodEnd > now &&
    billing.verifiedAt > now - 24 * 60 * 60 * 1000
  );
}
export const invariants = [
  {
    id: "tenant-isolation",
    rule: "A membership grants access only to its organization.",
    test: "tests/backend.test.ts",
  },
  {
    id: "last-owner",
    rule: "An organization keeps at least one owner.",
    test: "tests/backend.test.ts",
  },
  {
    id: "paid-access",
    rule: "Paid features require verified, unexpired billing state.",
    test: "tests/backend.test.ts",
  },
];
