"use client";

import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const ServicesCardWeb3Blockchain: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[currentTranslate.value].Web3.services.title}</h2>
                            {InfoTranslation[currentTranslate.value].Web3.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {InfoTranslation[currentTranslate.value].Web3.services.items.map((item, index) => (
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
        </>
    );
};

export default ServicesCardWeb3Blockchain;
