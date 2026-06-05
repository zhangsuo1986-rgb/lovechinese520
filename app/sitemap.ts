import type { MetadataRoute } from "next";
import { navItems, professionalPages, site } from "@/lib/content";
import { getYouTubeVideos, videoCategories } from "@/lib/youtube";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const videos = await getYouTubeVideos();
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

  const videoLibraryPage = {
    url: `${site.domain}/videos`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.82,
  };

  const videoCategoryPages = videoCategories.map((item) => ({
    url: `${site.domain}/videos/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  const videoPages = videos.map((video) => ({
    url: `${site.domain}/video/${video.slug}`,
    lastModified: video.published ? new Date(video.published) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [video.thumbnail],
  }));

  const hskPages = [1, 2, 3, 4, 5, 6].map((level) => ({
    url: `${site.domain}/hsk/hsk${level}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.78,
  }));

  return [...basePages, videoLibraryPage, ...professionalTopicPages, ...videoCategoryPages, ...videoPages, ...hskPages];
}
