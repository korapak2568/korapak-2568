"use client";

import React from "react";
import Image from "next/image";
import HomeAiSolutionBanner from "@/components/AI/HomeAiSolutionBanner/HomeAiSolutionBanner";

const AiSolutionsPage: React.FC = () => {
  return (
    <>
      <div className="portfolio-area pt-4">
        <div className="container">
          <HomeAiSolutionBanner />
        </div>

        <div className="default-shape">
          <div className="shape1">
            <Image
              src="/images-ai/default-shape/default-shape1.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
          <div className="shape2">
            <Image
              src="/images-ai/default-shape/default-shape2.png"
              alt="image"
              width={14}
              height={16}
            />
          </div>
          <div className="shape3">
            <Image
              src="/images-ai/default-shape/default-shape3.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape4">
            <Image
              src="/images-ai/default-shape/default-shape4.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSolutionsPage;
