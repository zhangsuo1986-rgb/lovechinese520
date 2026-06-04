import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.reading.title,
  description: pages.reading.description,
};

export default function ReadingPage() {
  return <LearningPage {...pages.reading} />;
}
