"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="LOVE CHINESE home">
          <span className="grid h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img
              src="/love-chinese-youtube-icon.png"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-sm font-extrabold tracking-wide text-slate-950 sm:text-base">
              LOVE CHINESE 爱中文
            </span>
            <span className="block whitespace-nowrap text-xs font-medium text-brand-blue">{site.slogan}</span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
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
