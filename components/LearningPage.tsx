import { PageHero } from "@/components/PageHero";

type LearningPageProps = {
  title: string;
  kicker: string;
  description: string;
  sections: string[];
};

export function LearningPage({ title, kicker, description, sections }: LearningPageProps) {
  return (
    <>
      <PageHero kicker={kicker} title={title} description={description} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <article key={section} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-red-50 text-sm font-extrabold text-brand-red">
                {index + 1}
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">{section}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lesson content, videos, examples, and learner activities can be added here as LOVE CHINESE grows.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
