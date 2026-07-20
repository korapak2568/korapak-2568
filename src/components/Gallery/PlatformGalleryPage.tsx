"use client";

import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import type { PlatformGalleryContent } from "@/lib/platform-content/galleryContent";

export default function PlatformGalleryPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformGalleryContent;
}) {
  const galleryContent = content;

  return (
    <div className="smart-container-top">
      <GalleryPageMain global={galleryContent.gallery.gallery.global} />
      <GalleryModuleBottom slides={galleryContent.gallery.media.bottomSlides} />
      <AiAomLandingPage
        lang={lang}
        aom={galleryContent.aiCompanions.aiCompanions.aom}
      />
    </div>
  );
}
