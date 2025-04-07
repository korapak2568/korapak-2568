import React from "react";
import ServiceFaqGitHub from "./ServiceFaqGitHub";
import Image from "next/image";
import SidebarDevOps from "@/components/Services/SidebarDevOps";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import SidebarFullStack from "@/components/Services/SidebarFullStack";
import SidebarFrontEnd from "@/components/Services/SidebarFrontEnd";

const ServicesDetailsGitHub: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-details-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h1>{InfoTranslation[lang].DevOps.github.features[0].title}</h1>
                                <p>{InfoTranslation[lang].DevOps.github.features[0].description}</p>

                                <h2 className="pt-4">{InfoTranslation[lang].DevOps.github.features[1].title}</h2>
                                <p>{InfoTranslation[lang].DevOps.github.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.devopsTesting.github.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {InfoTranslation[lang].DevOps.github.features[1].list.map((item: string, index: number) => (
                                                    <li key={index} className="feature-item">
                                                        <div className="icon">
                                                            <i className="flaticon-check"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                {item}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{InfoTranslation[lang].DevOps.github.features[2].title}</h3>
                                    <p>{InfoTranslation[lang].DevOps.github.features[2].description}</p>
                                </div>

                                <ServiceFaqGitHub/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <SidebarDevOps/>
                            <SidebarFullStack/>
                            <SidebarFrontEnd/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default ServicesDetailsGitHub;
