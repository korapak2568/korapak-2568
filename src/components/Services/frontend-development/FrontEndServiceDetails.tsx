import React from "react";
import Image from "next/image";
import TechnicalExpertiseSidebar from "@/components/Services/TechnicalExpertiseSidebar";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import FrontEndServiceFaq from "@/components/Services/frontend-development/FrontEndServiceFaq";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import TechnicalExpertiseHero from "@/components/Services/TechnicalExpertiseHero";

export default function FrontEndServiceDetails(
    {lang, stack, frontEnd, fullStack}: {
        lang: string,
        stack: IFrontEndStack,
        frontEnd: IFrontEnd,
        fullStack: IFullStack,
    }
) {
    return (
        <>
            <TechnicalExpertiseHero
                features={stack.features}
                capabilityCount={frontEnd.stacks.length + fullStack.stacks.length}
            />
            <div className="services-details-area pb-50 container">
                    <div className="services-details-layout">
                        <div className="services-details-desc">
                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={stack.detailImage}
                                            alt={stack.alt}
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {stack.features[1].list.map((item: string, index: number) => (
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

                                {stack.features.slice(2).map((feature, index) => (
                                    <div key={index} className={index === 0 ? "text-result" : undefined}>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}

                                <FrontEndServiceFaq faqs={stack.faqs}/>
                        </div>

                        <div className="services-details-sidebar">
                            <TechnicalExpertiseSidebar
                                lang={lang}
                                frontEnd={frontEnd}
                                fullStack={fullStack}
                            />
                        </div>
                    </div>
            </div>
        </>
    );
}
