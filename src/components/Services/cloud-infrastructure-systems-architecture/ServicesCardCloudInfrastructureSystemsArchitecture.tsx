import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {headers} from "next/headers";

const ServicesCardCloudInfrastructureSystemsArchitecture: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            {InfoTranslation[lang].CloudSolution.descriptions.map(
                                (description, index) =>
                                    <p key={index}>{description.description}</p>
                            )}

                            {InfoTranslation[lang].CloudSolution.sections.map(
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
