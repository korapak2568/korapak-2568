"use client"

import React from "react";
import {IAboutContent} from "@/data/about/model/IAboutContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const AboutRight: React.FC = () => {
    const lang = useLocale().value

    return (
        <div className="col-lg-8">
            <div className="about-content">
                {InfoTranslation[lang].About.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        {item.description != undefined && (
                            <p className="mt-0 mb-3"
                               dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}

                <ul className="feature-list">
                    {InfoTranslation[lang].About.stacks.map((item: IAboutContent, index: any) => (
                        <li key={index} className="feature-item">
                            <div className="icon">
                                <i className="flaticon-check"></i>
                            </div>
                            <div className="content">
                                <strong>{item.title}</strong>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutRight;