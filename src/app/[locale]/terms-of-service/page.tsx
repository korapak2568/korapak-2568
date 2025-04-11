import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataTermOfService";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataTermOfService[lang]
}

export default function TermsOfService() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <h1>{InfoTranslation[lang].TermOfService.title}</h1>
                    <div className="privacy-content">
                        {InfoTranslation[lang].TermOfService.list.map((item: IPolicyContent, index: number) => (
                            <div key={index} className="addition-ptb-20">

                                {item.description != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.description}}/>
                                )}

                                {item.expand != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.expand}}/>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}