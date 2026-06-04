import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionalCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Professional Chinese",
  description:
    "Learn industry-specific Chinese for construction, oil and gas, transportation, mining, hotel, medical, and restaurant work.",
};

export default function ProfessionalPage() {
  return (
    <>
      <PageHero
        kicker="Industry-specific Chinese"
        title="Professional Chinese"
        description="Learn practical Chinese for real workplace communication across international industries."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {professionalCategories.map((category) => (
            <ProfessionalCard key={category.title} {...category} />
          ))}
        </div>
      </section>
    </>
  );
}
