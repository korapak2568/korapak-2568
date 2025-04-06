import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import CloudDevOpsStack from "@/components/Services/cloud-devops/CloudDevOpsStack";

const ServicesCardDevOpsTesting: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className={'add-web-content'}>
                            <h1>{InfoTranslation[lang].DevOps.services.title}</h1>
                            {InfoTranslation[lang].DevOps.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul className="feature-list">
                                {InfoTranslation[lang].DevOps.services.items.map((item, index) => (
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
                        <CloudDevOpsStack/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardDevOpsTesting;
