"use client";

import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ILink} from "@/data/model/common/ILink";

const WeWorkForIndustries: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="industries-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{service.BUSINESS_DOMAINS_INFO.span}</span>
                        <h2>{service.BUSINESS_DOMAINS_INFO.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        {service.BUSINESS_DOMAINS_INFO.businessDomains.map((item: ILink, index: number) => (
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
