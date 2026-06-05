import type { MetadataRoute } from "next";
import { navItems, professionalPages, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = navItems.map((item) => ({
    url: `${site.domain}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const professionalTopicPages = professionalPages.map((item) => ({
    url: `${site.domain}/professional/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...basePages, ...professionalTopicPages];
}
