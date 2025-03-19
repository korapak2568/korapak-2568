"use client"

import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export default function Page() {
    const locale = useLocale()

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale.value].WorkplacePolicy.title}/>

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {InfoTranslation[locale.value].WorkplacePolicy.list.map((item: IPolicyContent, index: number) => (
                            <div key={index} className="addition-ptb-20">
                                <h3>{item.title}</h3>

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
