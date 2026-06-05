import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { hsk1Vocabulary, youtube } from "@/lib/content";

export const metadata: Metadata = {
  title: "HSK 1 Vocabulary",
  description:
    "Study HSK 1 Chinese vocabulary with pinyin, English meanings, example sentences, and LOVE CHINESE YouTube video lessons.",
};

export default function HskPage() {
  return (
    <>
      <PageHero
        kicker="HSK 1 Vocabulary"
        title="HSK 1 Vocabulary with Examples"
        description="Build your first Chinese vocabulary foundation with pinyin, English meanings, practical example sentences, and video learning."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
          <div className="border-b border-slate-200/80 px-5 py-4">
            <h2 className="text-2xl font-extrabold text-slate-950">Core HSK 1 Words</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with these high-frequency words and practice each one in a complete sentence.
            </p>
          </div>
          <div className="divide-y divide-slate-200/80">
            {hsk1Vocabulary.map((word) => (
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

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <YouTubeEmbed id={youtube.videos[0].id} title="HSK 1 Chinese Vocabulary Video Lesson" />
          <div className="mt-5 rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Video Practice</p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950">Learn with LOVE CHINESE</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Watch the lesson, repeat each word aloud, then read the example sentences until they feel natural.
            </p>
            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-lg bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Watch on YouTube
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
