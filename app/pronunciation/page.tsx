import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.pronunciation.title,
  description: pages.pronunciation.description,
};

export default function PronunciationPage() {
  return <LearningPage {...pages.pronunciation} />;
}
