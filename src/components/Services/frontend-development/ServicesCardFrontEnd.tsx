import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FrontEndStack from "./FrontEndStack";
import {headers} from "next/headers";

const ServicesCardFrontEnd: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        {/*<div className="row align-items-center">*/}

                            {/*<div className="col-lg-6">*/}
                            {/*    Hello*/}
                            {/*</div>*/}
                            {/* <div className={'col-lg-6 add-web-content'}>*/}

                            <div>
                                <h2>{InfoTranslation[lang].FrontEnd.services.title}</h2>
                                {InfoTranslation[lang].FrontEnd.services.descriptions.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}

                                <ul className="feature-list">
                                    {InfoTranslation[lang].FrontEnd.services.items.map((item, index) => (
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

                        {/*</div>*/}

                        <FrontEndStack/>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default ServicesCardFrontEnd;