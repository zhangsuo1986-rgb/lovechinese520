import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.sentences.title,
  description: pages.sentences.description,
};

export default function SentencesPage() {
  return <LearningPage {...pages.sentences} />;
}
