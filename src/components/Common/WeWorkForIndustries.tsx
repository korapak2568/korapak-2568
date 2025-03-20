"use client";

import React from "react";
import {IBusinessLink} from "@/data/business/model/IBusinessLink";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const WeWorkForIndustries: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="industries-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{InfoTranslation[locale.value].Business.span}</span>
                        <h2>{InfoTranslation[locale.value].Business.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        {InfoTranslation[locale.value].Business.domains.map((item: IBusinessLink, index: number) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="single-industries-box">
                                    <i className={item.icon}></i>
                                    <h3>{item.label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeWorkForIndustries;
