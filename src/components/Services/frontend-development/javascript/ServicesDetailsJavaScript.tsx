import React from "react";
import ServiceFaqJavaScript from "./ServiceFaqJavaScript";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import SidebarFrontEnd from "@/components/Services/SidebarFrontEnd";
import SidebarFullStack from "@/components/Services/SidebarFullStack";
import SidebarDevOps from "@/components/Services/SidebarDevOps";

export default function ServicesDetailsJavaScript({lang}: { lang: string }) {
    return (
        <>
            <div className="services-details-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h1>{InfoTranslation[lang].FrontEnd.javascript.features[0].title}</h1>
                                <p>{InfoTranslation[lang].FrontEnd.javascript.features[0].description}</p>

                                <h2 className="pt-4">{InfoTranslation[lang].FrontEnd.javascript.features[1].title}</h2>
                                <p>{InfoTranslation[lang].FrontEnd.javascript.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.frontend.frameworks.javascript.image1200}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {InfoTranslation[lang].FrontEnd.javascript.features[1].list.map((item: string, index: number) => (
                                                    <li key={index} className="feature-item">
                                                        <div className="feature-icon-container">
                                                            <div className="feature-icon">
                                                                <i className="flaticon-check"></i>
                                                            </div>
                                                            <div className="feature-title">
                                                                {item}
                                                            </div>
                                                        </div>
                                                        <div className="feature-content"/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3>{InfoTranslation[lang].FrontEnd.javascript.features[2].title}</h3>
                                <p>{InfoTranslation[lang].FrontEnd.javascript.features[2].description}</p>

                                <h3>{InfoTranslation[lang].FrontEnd.javascript.features[3].title}</h3>
                                <p>{InfoTranslation[lang].FrontEnd.javascript.features[3].description}</p>

                                <ServiceFaqJavaScript lang={lang}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <SidebarFrontEnd lang={lang}/>
                            <SidebarFullStack lang={lang}/>
                            <SidebarDevOps lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    )
}