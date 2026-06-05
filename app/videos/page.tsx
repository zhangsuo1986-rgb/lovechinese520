import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VideoCard } from "@/components/VideoCard";
import { getYouTubeVideos, searchVideos, videoCategories } from "@/lib/youtube";

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
    description: "Search and browse Chinese learning videos from LOVE CHINESE 爱中文.",
    url: "/videos",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOVE CHINESE YouTube Video Library",
    description: "Search and browse Chinese learning videos from LOVE CHINESE 爱中文.",
  },
};

type VideosPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function VideosPage({ searchParams }: VideosPageProps) {
  const params = await searchParams;
  const query = params?.q ?? "";
  const videos = await getYouTubeVideos();
  const results = searchVideos(videos, query);

  return (
    <>
      <PageHero
        kicker="Video Library"
        title="Learn Chinese with YouTube Videos"
        description="Search LOVE CHINESE lessons by Chinese characters, pinyin, English keywords, HSK level, and professional topic."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <form className="rounded-lg border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
          <label htmlFor="video-search" className="text-sm font-bold uppercase tracking-widest text-brand-blue">
            Search Videos
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="video-search"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search HSK, pinyin, 中文, construction, restaurant..."
              className="min-h-12 flex-1 rounded-lg border border-slate-200 bg-white px-4 text-base outline-none transition focus:border-brand-blue"
            />
            <button className="rounded-lg bg-brand-red px-6 py-3 text-base font-bold text-white transition hover:bg-red-800">
              Search
            </button>
          </div>
        </form>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {query ? `Search results for "${query}"` : "All Videos"}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">{results.length} lessons found</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}
