// src/component/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import AomSideRight from "@/components/AiCompanions/SideRight/AomSideRight";
import AomBottomFeature from "@/components/AiCompanions/BottomFeature/AomBottomFeature";
import { IAiLanding } from "@/lib/model/IAi";

const AiAomLandingPage: React.FC<{ lang: string; aom: IAiLanding }> = ({
  lang,
  aom,
}) => {
  const content = aom;

  return (
    <div className="portfolio-details-area pt-100 pb-70">
      <div className="container">
        <h1>{content.title}</h1>
        <div className="row">
          <div className="col-lg-8">
            <div className="portfolio-details-image">
              <Image
                src={content.pages.landing.image.path}
                alt="portfolio"
                width={1000}
                height={600}
              />
            </div>
            <AomBottomFeature lang={lang} aom={content} />
          </div>
          <AomSideRight lang={lang} aom={content} />
        </div>
      </div>
    </div>
  );
};

export default AiAomLandingPage;
