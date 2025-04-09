import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
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

            <PageBanner pageTitle="Terms Of Service"/>

            <div className="terms-of-service-area ptb-100">
                <div className="container">
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

            <SubscribeForm lang={lang}/>

            <Footer/>
        </>
    );
}