import Link from "next/link";
import { navItems, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-red font-bold text-white">爱</span>
            <div>
              <p className="font-bold text-slate-950">{site.name}</p>
              <p className="text-sm text-brand-blue">{site.slogan}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            A clean learning home for beginner Chinese, HSK study, culture, and professional Chinese.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-medium text-slate-600 hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LOVE CHINESE 爱中文. All rights reserved.
      </div>
    </footer>
  );
}
