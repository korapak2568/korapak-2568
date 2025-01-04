"use client";

import React from "react";
import {Info} from "@/data/info/Info";
import {IBusinessLink} from "@/data/business/model/IBusinessLink";

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
                        {Info.Business.domains.map((item: IBusinessLink, index: number) => (
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
