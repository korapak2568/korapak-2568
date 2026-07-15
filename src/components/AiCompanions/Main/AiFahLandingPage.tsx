// src/component/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import FahSideRight from "../SideRight/FahSideRight";
import FahBottomFeature from "@/components/AiCompanions/BottomFeature/FahBottomFeature";
import { IAiLanding } from "@/lib/model/IAi";

const AiFahLandingPage: React.FC<{ lang: string; fah: IAiLanding }> = ({
  lang,
  fah,
}) => {
  const content = fah;

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
            <FahBottomFeature fah={content} />
          </div>
          <FahSideRight lang={lang} fah={content} />
        </div>
      </div>
    </div>
  );
};

export default AiFahLandingPage;
