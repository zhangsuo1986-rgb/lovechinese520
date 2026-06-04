import Link from "next/link";

type CourseCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function CourseCard({ title, description, href, icon }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="mb-5 grid h-14 w-14 place-items-center rounded-lg bg-blue-50 text-sm font-bold text-brand-blue">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-slate-950 group-hover:text-brand-red">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
