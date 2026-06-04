import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.grammar.title,
  description: pages.grammar.description,
};

export default function GrammarPage() {
  return <LearningPage {...pages.grammar} />;
}
