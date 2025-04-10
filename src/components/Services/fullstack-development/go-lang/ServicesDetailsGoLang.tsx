import React from "react";
import Image from "next/image";
import SidebarFullStack from "@/components/Services/SidebarFullStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import SidebarFrontEnd from "@/components/Services/SidebarFrontEnd";
import SidebarDevOps from "@/components/Services/SidebarDevOps";
import ServiceFaqPython from "@/components/Services/fullstack-development/python/ServiceFaqPython";

export default function ServicesDetailsGoLang({lang}: { lang: string }) {
    return (
        <>
            <div className="services-details-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h1>{InfoTranslation[lang].FullStack.go.features[0].title}</h1>
                                <p>{InfoTranslation[lang].FullStack.go.features[0].description}</p>

                                <h2 className="pt-4">{InfoTranslation[lang].FullStack.go.features[1].title}</h2>
                                <p>{InfoTranslation[lang].FullStack.go.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.backend.frameworks.go.image1200}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {InfoTranslation[lang].FullStack.go.features[1].list.map((item: string, index: number) => (
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

                                <h3>{InfoTranslation[lang].FullStack.go.features[2].title}</h3>
                                <p>{InfoTranslation[lang].FullStack.go.features[2].description}</p>

                                <h3>{InfoTranslation[lang].FullStack.go.features[3].title}</h3>
                                <p>{InfoTranslation[lang].FullStack.go.features[3].description}</p>

                                <ServiceFaqPython lang={lang}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <SidebarFullStack lang={lang}/>
                            <SidebarFrontEnd lang={lang}/>
                            <SidebarDevOps lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    )
}