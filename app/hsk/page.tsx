import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.hsk.title,
  description: pages.hsk.description,
};

export default function HskPage() {
  return <LearningPage {...pages.hsk} />;
}
