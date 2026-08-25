import { seo } from "@/data/portfolio";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
