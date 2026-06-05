import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { professionalPages, youtube } from "@/lib/content";

type ProfessionalTopicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return professionalPages.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: ProfessionalTopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = professionalPages.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: `${category.description} Learn useful workplace vocabulary, phrases, and communication patterns with LOVE CHINESE 爱中文.`,
  };
}

export default async function ProfessionalTopicPage({ params }: ProfessionalTopicPageProps) {
  const { slug } = await params;
  const category = professionalPages.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="Professional Chinese"
        title={category.title}
        description={`${category.description} Study practical words, workplace sentences, and speaking patterns for real communication.`}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Key Vocabulary</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Words for real workplace situations</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {category.keywords.map((keyword) => (
              <div key={keyword} className="rounded-lg border border-slate-200/80 bg-white/75 p-4">
                <p className="font-bold text-slate-950">{keyword}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn the Chinese term, pronunciation, and a practical sentence for this workplace topic.
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur lg:self-start">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Study Plan</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950">How to learn this topic</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <li>1. Learn the core vocabulary and repeat the pronunciation aloud.</li>
            <li>2. Practice short workplace sentences with a real situation in mind.</li>
            <li>3. Watch LOVE CHINESE video lessons and review the words again.</li>
          </ul>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-800"
          >
            Watch on YouTube
          </a>
        </aside>
      </section>
    </>
  );
}
