import type { Metadata } from "next";
import { headers } from "next/headers";
import FutureCivilizationRoadmapPage from "@/components/FutureCivilization/FutureCivilizationRoadmapPage";
import { getFutureCivilizationMetadata } from "@/lib/platform-content/futureRoadmapContent";

export async function generateMetadata(): Promise<Metadata> {
  return getFutureCivilizationMetadata();
}

export default async function Page() {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";

  return <FutureCivilizationRoadmapPage lang={lang} />;
}
