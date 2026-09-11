import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/designs", "/docs", "/privacy"].map((path) => ({
    url: "https://companynerve.com" + path,
  }));
}
