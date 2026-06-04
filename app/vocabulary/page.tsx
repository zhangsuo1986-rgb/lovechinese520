import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.vocabulary.title,
  description: pages.vocabulary.description,
};

export default function VocabularyPage() {
  return <LearningPage {...pages.vocabulary} />;
}
