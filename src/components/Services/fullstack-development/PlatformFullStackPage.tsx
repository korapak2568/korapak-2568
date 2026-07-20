"use client";

import FullStackPageMain from "@/components/Services/fullstack-development/FullStackPageMain";
import type { PlatformFullstackContent } from "@/lib/platform-content/fullstackContent";

export default function PlatformFullStackPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformFullstackContent;
}) {
  const fullstackContent = content;

  return (
    <>
      <FullStackPageMain lang={lang} fullStack={fullstackContent.fullStack} />
    </>
  );
}
