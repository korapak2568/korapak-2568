import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataPrivacyPolicy} from "@/metadata/pages/privacy-policy/common/MetadataPrivacyPolicy";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataPrivacyPolicy[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].PrivacyPolicy.title}/>

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {InfoTranslation[lang].PrivacyPolicy.list.map((item: IPolicyContent, iItem: number) => (
                            <div key={iItem} className="addition-ptb-20">
                                {item.description != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.description}}/>
                                )}

                                {item.isDetailed &&
                                    item.details?.map((detail: IPolicyContent, iDetail) => (
                                        <div key={iDetail} className="addition-ptb-20">
                                            <h4>{detail.title}</h4>

                                            {detail.description != undefined && (
                                                <p dangerouslySetInnerHTML={{__html: detail.description}}/>
                                            )}
                                        </div>
                                    ))
                                }
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
