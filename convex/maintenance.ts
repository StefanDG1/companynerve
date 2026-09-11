import { internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
export const deletionJob = internalQuery({
  args: { jobId: v.id("deletionJobs") },
  handler: (ctx, { jobId }) => ctx.db.get(jobId),
});
export const purgeOrganization = internalMutation({
  args: { organizationId: v.id("organizations") },
  handler: async (ctx, { organizationId }) => {
    const org = await ctx.db.get(organizationId);
    if (!org || org.status !== "deleting") return;
    for (const table of [
      "projects",
      "memberships",
      "invitations",
      "billing",
      "audit",
    ] as const) {
      const rows = await ctx.db
        .query(table)
        .withIndex("by_org", (q) => q.eq("organizationId", organizationId))
        .take(100);
      for (const row of rows) await ctx.db.delete(row._id);
      if (rows.length === 100) {
        await ctx.scheduler.runAfter(
          0,
          internal.maintenance.purgeOrganization,
          { organizationId },
        );
        return;
      }
    }
    await ctx.db.delete(organizationId);
  },
});
export const cleanup = internalMutation({
  args: {},
  handler: async (ctx) => {
    for (const row of await ctx.db.query("events").take(200)) {
      if (row.processedAt < Date.now() - 30 * 86400000)
        await ctx.db.delete(row._id);
    }
    for (const row of await ctx.db.query("limits").take(200)) {
      if (row.window < Math.floor(Date.now() / 60000) - 60)
        await ctx.db.delete(row._id);
    }
  },
});
