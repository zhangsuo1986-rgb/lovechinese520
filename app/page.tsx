import Link from "next/link";
import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { featuredCourses, professionalCategories, site, youtube } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn Chinese Online",
  description:
    "Learn Chinese step by step with LOVE CHINESE 爱中文 through YouTube videos, HSK vocabulary, pronunciation, grammar, culture, and professional Chinese lessons.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white/75">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue" />
        <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-12 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">{site.slogan}</p>
            <h1 className="mt-4 whitespace-nowrap text-[clamp(2.2rem,5.8vw,4.5rem)] font-extrabold leading-none tracking-tight text-slate-950">
              LOVE CHINESE 爱中文
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Learn Chinese through videos, vocabulary, sentences, grammar and culture.
            </p>
            <div className="mt-8">
              <Link
                href="/hsk"
                className="inline-flex rounded-lg bg-brand-red px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-red-800"
              >
                Start Learning
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {["你好", "拼音", "词汇", "语法"].map((text, index) => (
                <div key={text} className="rounded-lg bg-white/90 p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-brand-red">{text}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-600">
                    Step {index + 1}: Learn with clear examples.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Featured Courses</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Start with the essentials</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Beginner-friendly learning paths designed for children, adults, HSK learners, and professionals.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="bg-white/65 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Professional Chinese</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Chinese for real workplaces</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {professionalCategories.map((category) => (
              <ProfessionalCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Latest Videos</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Watch Chinese lessons on YouTube</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {youtube.videos.map((video) => (
            <article key={video.id}>
              <YouTubeEmbed id={video.id} title={video.title} />
              <h3 className="mt-4 font-bold text-slate-950">{video.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{video.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg bg-brand-blue px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-blue-800"
          >
            Watch on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
