import React from "react";
import Image from "next/image";
import {ICloudStack} from "@/data/cloud/model/ICloudStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function CloudExperience({lang, isHome = false}: { lang: string, isHome?: boolean }) {

    const classes = isHome ? "fun-facts-area pb-70 pt-5" : "fun-facts-area pb-70"

    return (
        <div className={`${classes}`}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {InfoTranslation[lang].Cloud.stacks.map((item: ICloudStack, index: any) => (
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
    )
}