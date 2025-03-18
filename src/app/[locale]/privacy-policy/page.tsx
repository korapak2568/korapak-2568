"use client"

import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function Page() {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[currentTranslate.value].PrivacyPolicy.title}/>

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {InfoTranslation[currentTranslate.value].PrivacyPolicy.list.map((item: IPolicyContent, iItem: number) => (
                            <div key={iItem} className="addition-ptb-20">
                                <h3>{item.title}</h3>

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
