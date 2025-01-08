"use client"

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import {Info} from "@/data/info/Info";
import {IPolicyContent} from "@/data/policy/model/IPolicyContent";

export default function Page() {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.PrivacyPolicy.title}/>

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {Info.PrivacyPolicy.list.map((item: IPolicyContent, iItem: number) => (
                            <div key={iItem} className="addition-ptb-20">
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{__html: item.description} as { __html: string }}/>

                                {item.isDetailed &&
                                    item.details?.map((detail: IPolicyContent, iDetail) => (
                                        <div key={iDetail} className="addition-ptb-20">
                                            <h4>{detail.title}</h4>
                                            <p dangerouslySetInnerHTML={{__html: detail.description} as {
                                                __html: string
                                            }}/>
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
