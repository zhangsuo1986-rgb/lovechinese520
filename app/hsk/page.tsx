import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VideoSection } from "@/components/VideoSection";
import { hsk1Vocabulary } from "@/lib/content";
import { getVideosByCategory, videoCategories } from "@/lib/youtube";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "HSK Chinese Learning",
  description:
    "Study HSK Chinese from HSK 1 to HSK 6 with vocabulary, pinyin, example sentences, and LOVE CHINESE YouTube video lessons.",
  alternates: {
    canonical: "/hsk",
  },
};

export default async function HskPage() {
  const hsk1Videos = await getVideosByCategory("HSK 1");
  const hskCategories = videoCategories.filter((category) => category.title.startsWith("HSK"));

  return (
    <>
      <PageHero
        kicker="HSK Learning"
        title="HSK Chinese Learning Path"
        description="Choose your HSK level and study Chinese vocabulary, example sentences, listening, and video lessons step by step."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {hskCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/hsk/${category.slug.replace("-", "")}`}
              className="rounded-lg border border-white/70 bg-white/80 p-5 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-2xl font-extrabold text-brand-red">{category.title}</p>
              <p className="mt-2 text-xs font-semibold text-slate-600">Videos and vocabulary</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
          <div className="border-b border-slate-200/80 px-5 py-4">
            <h2 className="text-2xl font-extrabold text-slate-950">HSK 1 Starter Vocabulary</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with these high-frequency HSK 1 words, then watch the related video lessons.
            </p>
          </div>
          <div className="divide-y divide-slate-200/80">
            {hsk1Vocabulary.slice(0, 8).map((word) => (
              <article key={word.chinese} className="grid gap-4 px-5 py-5 md:grid-cols-[0.55fr_1.45fr]">
                <div>
                  <p className="text-3xl font-extrabold text-brand-red">{word.chinese}</p>
                  <p className="mt-1 font-semibold text-brand-blue">{word.pinyin}</p>
                  <p className="mt-2 text-sm font-bold text-slate-700">{word.english}</p>
                </div>
                <div className="text-sm leading-7 text-slate-600">
                  <p className="font-bold text-slate-950">{word.exampleChinese}</p>
                  <p>{word.examplePinyin}</p>
                  <p>{word.exampleEnglish}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur lg:self-start">
          <h2 className="text-2xl font-extrabold text-slate-950">HSK 1 Video Practice</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Watch beginner lessons, repeat aloud, and review the example sentences until they feel natural.
          </p>
          <Link
            href="/hsk/hsk1"
            className="mt-5 inline-flex rounded-lg bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-800"
          >
            Open HSK 1 Videos
          </Link>
        </div>
      </section>

      <VideoSection
        eyebrow="HSK 1 Videos"
        title="Latest HSK 1 Lessons"
        description="Automatically loaded from the LOVE CHINESE YouTube channel."
        videos={hsk1Videos}
        href="/hsk/hsk1"
      />
    </>
  );
}
