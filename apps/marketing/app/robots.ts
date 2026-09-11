import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/designs/" },
    sitemap: "https://companynerve.com/sitemap.xml",
  };
}
