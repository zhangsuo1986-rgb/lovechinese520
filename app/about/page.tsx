import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Suo Zhang, Chinese Teacher in UAE, founder of LOVE CHINESE, with 10+ years international Chinese teaching experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About LOVE CHINESE"
        title="Meet Suo Zhang"
        description="Chinese Teacher in UAE, founder of LOVE CHINESE, with 10+ years international Chinese teaching experience."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-red-50 to-blue-50">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-brand-red">Suo Zhang</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-brand-blue">Profile Photo</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Founder of LOVE CHINESE</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950">Chinese learning that feels clear, human, and useful.</h2>
          <p className="mt-5 leading-8 text-slate-600">
            LOVE CHINESE 爱中文 helps learners build Chinese step by step through pronunciation, vocabulary,
            sentence practice, grammar, culture, HSK learning, and professional Chinese lessons.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            The mission is to make Chinese accessible for complete beginners, children, adults, and professionals
            who need practical language for study, life, and work.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["UAE-based", "10+ Years", "International Teaching"].map((item) => (
              <div key={item} className="rounded-lg bg-brand-bg p-4 text-center font-bold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
