"use client";

import React from "react";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {ICloudStack} from "@/data/cloud/model/ICloudStack";

const CloudExperience: React.FC = () => {

    return (
        <>
            <div className="fun-facts-area pb-70">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {Info.Cloud.stacks.map((item: ICloudStack, index: any) => (
                            <div key={index} className="col-lg-3 col-md-6 col-6">
                                <div className="single-fun-fact-box">
                                    <div className="icon">
                                        <Image
                                            className="hover-rotate"
                                            src={item.image}
                                            alt={item.title}
                                            width={75}
                                            height={75}
                                        />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CloudExperience;
