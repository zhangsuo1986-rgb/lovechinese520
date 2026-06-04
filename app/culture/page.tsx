import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.culture.title,
  description: pages.culture.description,
};

export default function CulturePage() {
  return <LearningPage {...pages.culture} />;
}
