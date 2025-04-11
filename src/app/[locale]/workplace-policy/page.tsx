import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataWorkPolicy} from "@/metadata/pages/workplace-policy/common/MetadataWorkPolicy";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataWorkPolicy[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <h1>{InfoTranslation[lang].WorkplacePolicy.title}</h1>
                    <div className="privacy-content">
                        {InfoTranslation[lang].WorkplacePolicy.list.map((item: IPolicyContent, index: number) => (
                            <div key={index} className="addition-ptb-20">
                                {item.description != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.description}}/>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
