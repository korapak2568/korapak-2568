import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFeatureStack} from "@/data/feature/model/IFeatureStack";
import Link from "next/link";
import {truncateText} from "@/lib/truncateText";
import React from "react";

export default function HomeFeatureRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-6">
            <div className="row">
                {InfoTranslation[lang].Feature.stacks.map((stack: IFeatureStack, index: number) => (
                    <div key={index} className="home-feature-container">
                        <Link href={'/' + lang + stack.link}>
                            <div className="custom-single-features-box feature-box">
                                <div className="icon feature-box-icon">
                                    <i className={stack.icon + " feature-icon hover-rotate"}/>
                                    <span className="feature-box-title">
                                        {stack.title}
                                    </span>
                                </div>
                                <p className="feature-box-description">
                                    {truncateText(stack.description, 110)}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}