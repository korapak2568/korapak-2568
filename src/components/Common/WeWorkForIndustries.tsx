"use client";

import React from "react";
import {ILink} from "@/data/model/common/ILink";
import {Info} from "@/data/info/Info";

const WeWorkForIndustries: React.FC = () => {

    return (
        <>
            <div className="industries-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{Info.Business.span}</span>
                        <h2>{Info.Business.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        {Info.Business.businessDomains.map((item: ILink, index: number) => (
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
