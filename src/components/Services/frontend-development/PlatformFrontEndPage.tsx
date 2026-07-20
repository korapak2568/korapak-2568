"use client";

import FrontEndPageMain from "@/components/Services/frontend-development/FrontEndPageMain";
import type { PlatformFrontendContent } from "@/lib/platform-content/frontendContent";

export default function PlatformFrontEndPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformFrontendContent;
}) {
  const frontEndContent = content;

  return (
    <>
      <FrontEndPageMain lang={lang} frontEnd={frontEndContent.frontEnd} />
    </>
  );
}
