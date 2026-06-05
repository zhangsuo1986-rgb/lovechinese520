type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-red">{kicker}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}
