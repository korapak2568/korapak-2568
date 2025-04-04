import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {headers} from "next/headers";
import WebDevelopmentFrontEndStack from "@/components/Services/WebDevelopment/WebDevelopmentFrontEndStack";
import WebDevelopmentBackEndStack from "@/components/Services/WebDevelopment/WebDevelopmentBackEndStack";

const ServiceCardWebDevelopment: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[lang].FrontEnd.services.title}</h2>
                            {InfoTranslation[lang].FrontEnd.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <h2>{InfoTranslation[lang].FullStack.services.title}</h2>
                            {InfoTranslation[lang].FullStack.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul className="feature-list">
                                {InfoTranslation[lang].FullStack.services.items.map((item, index) => (
                                    <li key={index} className="feature-item">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <div className="content">
                                            <strong>{item.title}</strong>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <WebDevelopmentFrontEndStack/>
                        <WebDevelopmentBackEndStack/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default ServiceCardWebDevelopment;
