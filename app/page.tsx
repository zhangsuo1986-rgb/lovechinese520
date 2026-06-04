import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { featuredCourses, professionalCategories, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">{site.slogan}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
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

          <div className="rounded-lg border border-slate-200 bg-brand-bg p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {["你好", "拼音", "词汇", "语法"].map((text, index) => (
                <div key={text} className="rounded-lg bg-white p-5 shadow-sm">
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

      <section className="bg-white">
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
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">YouTube lessons coming soon</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((video) => (
            <div key={video} className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
              <div className="flex aspect-video items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500">
                YouTube Embed Placeholder
              </div>
              <h3 className="mt-4 font-bold text-slate-950">Latest Chinese Lesson {video}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
