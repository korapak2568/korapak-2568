"use client";

import FrontEndPageMain from "@/components/Services/frontend-development/FrontEndPageMain";
import type { PlatformFrontendContent } from "@/lib/platform-content/frontendContent";
import { usePlatformFrontendContent } from "@/lib/platform-content/usePlatformFrontendContent";

export default function PlatformFrontEndPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformFrontendContent;
}) {
  const { data: cachedContent } = usePlatformFrontendContent(lang, content);
  const frontEndContent = cachedContent ?? content;

  return (
    <>
      <FrontEndPageMain lang={lang} frontEnd={frontEndContent.frontEnd} />
    </>
  );
}
