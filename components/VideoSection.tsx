import Link from "next/link";
import { VideoCard } from "@/components/VideoCard";
import type { YouTubeVideo } from "@/lib/youtube";

type VideoSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  videos: YouTubeVideo[];
  href?: string;
};

export function VideoSection({ eyebrow, title, description, videos, href }: VideoSectionProps) {
  if (!videos.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">{title}</h2>
          {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p> : null}
        </div>
        {href ? (
          <Link href={href} className="text-sm font-bold text-brand-blue hover:text-brand-red">
            View all
          </Link>
        ) : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {videos.slice(0, 6).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
