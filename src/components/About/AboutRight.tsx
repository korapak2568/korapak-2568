import React from "react";
import {IAboutContent} from "@/data/about/model/IAboutContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export default function AboutRight() {
    const locale = useLocale()

    return (
        <div className="col-lg-8">
            <div className="about-content">
                {InfoTranslation[locale.value].About.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        <h3 className={'mt-3'}>
                            {item.title}
                        </h3>

                        {item.description != undefined && (
                            <p dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}

                {InfoTranslation[locale.value].About.stacks.map((item: IAboutContent, index: any) => (
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