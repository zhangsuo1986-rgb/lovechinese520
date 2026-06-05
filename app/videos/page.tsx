import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VideoCard } from "@/components/VideoCard";
import { getYouTubeVideos, videoCategories } from "@/lib/youtube";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "YouTube Video Library",
  description:
    "Browse LOVE CHINESE 爱中文 YouTube lessons by HSK level, vocabulary, characters, conversations, professional Chinese, children's Chinese, stories, and culture.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    title: "LOVE CHINESE YouTube Video Library",
    description: "Browse Chinese learning videos from LOVE CHINESE 爱中文 by topic and HSK level.",
    url: "/videos",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOVE CHINESE YouTube Video Library",
    description: "Browse Chinese learning videos from LOVE CHINESE 爱中文 by topic and HSK level.",
  },
};

export default async function VideosPage() {
  const videos = await getYouTubeVideos();

  return (
    <>
      <PageHero
        kicker="Video Library"
        title="Learn Chinese with YouTube Videos"
        description="Browse LOVE CHINESE lessons by HSK level, vocabulary, characters, conversations, professional Chinese, children's Chinese, stories, and culture."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {videoCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/videos/${category.slug}`}
              className="rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft"
            >
              <h2 className="font-extrabold text-slate-950">{category.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">All Videos</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">{videos.length} lessons</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}
