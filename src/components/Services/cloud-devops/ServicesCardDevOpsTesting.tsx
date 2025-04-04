import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {headers} from "next/headers";
import CloudDevOpsStack from "@/components/Services/cloud-devops/CloudDevOpsStack";

const ServicesCardDevOpsTesting: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[lang].DevOps.services.title}</h2>
                            {InfoTranslation[lang].DevOps.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {InfoTranslation[lang].DevOps.services.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <CloudDevOpsStack/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardDevOpsTesting;
