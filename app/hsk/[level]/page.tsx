import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { VideoCard } from "@/components/VideoCard";
import type { VideoCategory } from "@/lib/youtube";
import { getVideosByCategory } from "@/lib/youtube";

export const revalidate = 3600;

const hskLevels = ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6"] as const;

type HskLevelPageProps = {
  params: Promise<{
    level: string;
  }>;
};

export function generateStaticParams() {
  return hskLevels.map((level) => ({ level }));
}

export async function generateMetadata({ params }: HskLevelPageProps): Promise<Metadata> {
  const { level } = await params;
  const label = getHskLabel(level);

  if (!label) {
    return {};
  }

  return {
    title: `${label} Videos`,
    description: `Study ${label} Chinese with LOVE CHINESE 爱中文 YouTube video lessons, vocabulary, pinyin, example sentences, and learner-friendly explanations.`,
    alternates: {
      canonical: `/hsk/${level}`,
    },
  };
}

export default async function HskLevelPage({ params }: HskLevelPageProps) {
  const { level } = await params;
  const label = getHskLabel(level);

  if (!label) {
    notFound();
  }

  const videos = await getVideosByCategory(label);

  return (
    <>
      <PageHero
        kicker="HSK Video Lessons"
        title={`${label} Chinese Videos`}
        description={`Automatically organized ${label} video lessons from the LOVE CHINESE YouTube channel.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Video Lessons</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">{videos.length} related videos</h2>
          </div>
          <Link href="/hsk" className="text-sm font-bold text-brand-blue hover:text-brand-red">
            Back to HSK
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

function getHskLabel(level: string) {
  const labels: Record<string, VideoCategory> = {
    hsk1: "HSK 1",
    hsk2: "HSK 2",
    hsk3: "HSK 3",
    hsk4: "HSK 4",
    hsk5: "HSK 5",
    hsk6: "HSK 6",
  };

  return labels[level] ?? null;
}
