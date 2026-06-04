import type { Metadata } from "next";
import { LearningPage } from "@/components/LearningPage";
import { pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.characters.title,
  description: pages.characters.description,
};

export default function CharactersPage() {
  return <LearningPage {...pages.characters} />;
}
