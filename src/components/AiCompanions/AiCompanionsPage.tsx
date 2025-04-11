import React from "react";
import MainBannerAiFah from "@/components/AiFahBanner/AiBannerFahMain";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";

export default function AiCompanionsPage({lang}: { lang: string }) {
    return (
        <div className="portfolio-area pt-4 pb-5">
            <div className="container">
                <div className="row">
                    <div className={"add-web-content"}>
                        <h1>{InfoTranslation[lang].Service.demo.title}</h1>
                        <p>{InfoTranslation[lang].Service.demo.description}</p>

                        <div>
                            <ul className="feature-list">
                                {InfoTranslation[lang].Service.demo.procedure.steps.map((item, index) => (
                                    <li key={index} className="feature-item">
                                        <div className="feature-icon-container">
                                            <div className="feature-icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="feature-title">
                                                {item.title}
                                            </div>
                                        </div>
                                        <div className="feature-content">
                                            <p className="feature-description">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <MainBannerAiFah lang={lang}/>
                </div>
            </div>

            <DefaultShape/>
        </div>
    );
}