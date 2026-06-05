type ProfessionalCardProps = {
  title: string;
  description: string;
};

export function ProfessionalCard({ title, description }: ProfessionalCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-blue-50 via-slate-100 to-red-50">
        <div className="rounded-lg bg-white px-4 py-3 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Image Placeholder</p>
          <p className="mt-1 text-sm font-semibold text-slate-700">{title}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <button className="mt-5 rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800">
          Learn More
        </button>
      </div>
    </article>
  );
}
