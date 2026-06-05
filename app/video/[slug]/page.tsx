import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoCard } from "@/components/VideoCard";
import { getRelatedVideos, getVideoBySlug, getYouTubeVideos } from "@/lib/youtube";
import { site } from "@/lib/content";

export const revalidate = 3600;
export const dynamicParams = true;

type VideoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const videos = await getYouTubeVideos();
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);

  if (!video) {
    return {};
  }

  return {
    title: video.title,
    description: video.description,
    alternates: {
      canonical: `/video/${video.slug}`,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      url: `/video/${video.slug}`,
      type: "video.other",
      images: [{ url: video.thumbnail, alt: video.title }],
      videos: [{ url: video.embedUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: video.description,
      images: [video.thumbnail],
    },
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params;
  const videos = await getYouTubeVideos();
  const video = videos.find((item) => item.slug === slug || item.id === slug);

  if (!video) {
    notFound();
  }

  const relatedVideos = getRelatedVideos(video, videos);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.published,
    embedUrl: video.embedUrl,
    contentUrl: video.url,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <article className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">LOVE CHINESE Video Lesson</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950">{video.title}</h1>
            <div className="mt-6 overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
              <iframe
                className="aspect-video w-full"
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-6 rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-2xl font-extrabold text-slate-950">Lesson Description</h2>
              <p className="mt-3 leading-8 text-slate-600">{video.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {video.categories.map((category) => (
                  <Link
                    key={category}
                    href={`/videos/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand-blue"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg bg-brand-red px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-red-800"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
              <h2 className="text-xl font-extrabold text-slate-950">Related Videos</h2>
              <div className="mt-5 grid gap-5">
                {relatedVideos.map((related) => (
                  <VideoCard key={related.id} video={related} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
