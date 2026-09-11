import type { MetadataRoute } from "next";
import { company } from "@companynerve/company-config";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths =
    company.website.kind === "template"
      ? ["", "/designs", "/docs", "/privacy"]
      : ["", "/privacy"];
  return paths.map((path) => ({
    url: new URL(
      path || "/",
      process.env.NEXT_PUBLIC_SITE_URL || company.website.url,
    ).href,
  }));
}
