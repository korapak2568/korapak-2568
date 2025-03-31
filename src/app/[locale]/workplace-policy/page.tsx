import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataWorkPolicy";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataWorkPolicy[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].WorkplacePolicy.title}/>

            <div className="privacy-policy-area ptb-100">
                <div className="container">
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

            <SubscribeForm/>

            <Footer/>
        </>
    );
}
