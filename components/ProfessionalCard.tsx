import Link from "next/link";

type ProfessionalCardProps = {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
};

export function ProfessionalCard({ title, description, slug, keywords = [] }: ProfessionalCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 p-5">
        <div className="grid w-full grid-cols-2 gap-2">
          {keywords.slice(0, 4).map((keyword) => (
            <span
              key={keyword}
              className="rounded-lg bg-white/80 px-3 py-2 text-center text-xs font-bold text-slate-700 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <Link
          href={`/professional/${slug}`}
          className="mt-5 inline-flex rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
