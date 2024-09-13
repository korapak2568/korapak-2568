"use client";

import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";

const AboutContent: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);
    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp"
                                style={{backgroundImage: `url(/images/about/about-2.jpg)`}}
                            ></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">
                                <span>{service.ABOUT_CONTENT_INFO.title}</span>
                                <h3>{service.ABOUT_CONTENT_INFO.subTitle}</h3>
                                <div className="bar"></div>
                                <p>{service.ABOUT_CONTENT_INFO.description[0].description}</p>

                                {service.ABOUT_CONTENT_INFO.additions.map((item: IContentImage, index: any) => (
                                    <div key={index} className="about-inner-content">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutContent;
