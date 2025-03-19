"use client";

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const ServicesCardCloudInfrastructureSystemsArchitecture: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            {InfoTranslation[locale.value].CloudSolution.descriptions.map(
                                (description, index) =>
                                    <p key={index}>{description.description}</p>
                            )}

                            {InfoTranslation[locale.value].CloudSolution.sections.map(
                                (section, index) => (
                                    <div key={index}>
                                        <h2>{section.title}</h2>
                                        <p><strong>{section.span} </strong>{section.description}</p>
                                    </div>
                                )
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardCloudInfrastructureSystemsArchitecture;
