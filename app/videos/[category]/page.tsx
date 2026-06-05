import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { VideoCard } from "@/components/VideoCard";
import { getCategoryBySlug, getVideosByCategory, videoCategories } from "@/lib/youtube";

export const revalidate = 3600;

type VideoCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return videoCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: VideoCategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Videos`,
    description: `${category.description} Watch categorized LOVE CHINESE 爱中文 YouTube lessons with thumbnails, descriptions, embedded players, and original YouTube links.`,
    alternates: {
      canonical: `/videos/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} Videos | LOVE CHINESE`,
      description: category.description,
      url: `/videos/${category.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} Videos | LOVE CHINESE`,
      description: category.description,
    },
  };
}

export default async function VideoCategoryPage({ params }: VideoCategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const videos = await getVideosByCategory(category.title);

  return (
    <>
      <PageHero kicker="Video Category" title={`${category.title} Videos`} description={category.description} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Related Lessons</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">{videos.length} videos</h2>
          </div>
          <Link href="/videos" className="text-sm font-bold text-brand-blue hover:text-brand-red">
            Back to Video Library
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} showEmbed />
          ))}
        </div>
      </section>
    </>
  );
}
