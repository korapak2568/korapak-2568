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

                {InfoTranslation[lang].About.stacks.map((item: IAboutContent, index: any) => (
                    <div key={index} className="about-inner-content">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                        </div>
                        <h4>{item.title}</h4>

                        {item.description != undefined && (
                            <p dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutRight;