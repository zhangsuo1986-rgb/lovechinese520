import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { youtube } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Suo Zhang",
  description:
    "Meet Suo Zhang, a UAE-based Chinese teacher, CTCSOL-certified educator, and founder of LOVE CHINESE 爱中文 with 10+ years of international teaching experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About LOVE CHINESE"
        title="Meet Suo Zhang"
        description="UAE-based Chinese teacher, CTCSOL-certified educator, and founder of LOVE CHINESE 爱中文."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-red-50 via-white to-blue-50 p-8">
            <div className="text-center">
              <img
                src="/love-chinese-youtube-icon.png"
                alt="LOVE CHINESE 爱中文"
                className="mx-auto h-24 w-24 rounded-lg border border-slate-200 bg-white object-cover object-top shadow-sm"
              />
              <p className="mt-6 text-4xl font-extrabold text-brand-red">Suo Zhang</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-brand-blue">
                Founder of LOVE CHINESE 爱中文
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/70 bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Chinese Teacher in UAE</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950">
            Clear, practical Chinese lessons for learners around the world.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Suo Zhang is a UAE-based Chinese teacher and founder of LOVE CHINESE 爱中文, with 10+ years of
            international Chinese teaching experience and CTCSOL certification.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            LOVE CHINESE helps complete beginners, HSK learners, children, adults, and professionals learn Chinese
            step by step through pronunciation, vocabulary, sentence practice, grammar, culture, and workplace Chinese.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["UAE-based", "10+ Years", "CTCSOL Certified"].map((item) => (
              <div key={item} className="rounded-lg bg-white/70 p-4 text-center font-bold text-slate-800">
                {item}
              </div>
            ))}
          </div>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-lg bg-brand-red px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-red-800"
          >
            Watch on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
