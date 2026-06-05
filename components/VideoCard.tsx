import Link from "next/link";
import type { YouTubeVideo } from "@/lib/youtube";

type VideoCardProps = {
  video: YouTubeVideo;
  showEmbed?: boolean;
};

export function VideoCard({ video, showEmbed = false }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
      {showEmbed ? (
        <iframe
          className="aspect-video w-full"
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <Link href={`/video/${video.slug}`} className="block">
          <img src={video.thumbnail} alt={video.title} className="aspect-video w-full object-cover" loading="lazy" />
        </Link>
      )}
      <div className="p-5">
        {showEmbed ? (
          <img
            src={video.thumbnail}
            alt={`${video.title} thumbnail`}
            className="mb-4 h-20 w-32 rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        ) : null}
        <div className="mb-3 flex flex-wrap gap-2">
          {video.categories.slice(0, 3).map((category) => (
            <Link
              key={category}
              href={`/videos/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand-blue"
            >
              {category}
            </Link>
          ))}
        </div>
        <h3 className="line-clamp-2 text-lg font-extrabold text-slate-950">
          <Link href={`/video/${video.slug}`} className="hover:text-brand-red">
            {video.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{video.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/video/${video.slug}`}
            className="rounded-lg bg-brand-red px-4 py-2 text-sm font-bold text-white transition hover:bg-red-800"
          >
            View Lesson
          </Link>
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:text-brand-blue"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </article>
  );
}
