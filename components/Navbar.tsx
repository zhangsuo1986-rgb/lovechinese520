"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 max-w-[235px] items-center gap-3 lg:max-w-[285px]"
          aria-label="LOVE CHINESE home"
        >
          <span className="grid h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:h-14 sm:w-14">
            <img
              src="/love-chinese-youtube-icon.png"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate whitespace-nowrap text-[13px] font-extrabold tracking-wide text-slate-950 sm:text-sm">
              LOVE CHINESE 爱中文
            </span>
            <span className="block truncate whitespace-nowrap text-xs font-medium text-brand-blue sm:text-sm">
              {site.slogan}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>

        <div className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-0.5 md:flex lg:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-lg px-1.5 py-2 text-[11px] font-semibold leading-tight text-slate-700 transition hover:bg-slate-100 hover:text-brand-red lg:px-2 xl:px-2.5 xl:text-xs 2xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-red"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
