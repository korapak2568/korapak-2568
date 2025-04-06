import React from "react";
import HomeAiSolutionBanner from "@/components/AI/HomeAiSolutionBanner/HomeAiSolutionBanner";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const AiSolutionsPage: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="portfolio-area pt-4">
                <div className="container">
                    <HomeAiSolutionBanner lang={lang}/>
                </div>
                <DefaultShape/>
            </div>
        </>
    );
};

export default AiSolutionsPage;
