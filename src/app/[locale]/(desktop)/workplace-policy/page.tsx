import React from "react";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataWorkPolicy} from "@/metadata/main/MetadataWorkPolicy";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataWorkPolicy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
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
