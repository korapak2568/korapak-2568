"use client";

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const ServicesCardWeb3Blockchain: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[locale.value].Web3.services.title}</h2>
                            {InfoTranslation[locale.value].Web3.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {InfoTranslation[locale.value].Web3.services.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default ServicesCardWeb3Blockchain;
