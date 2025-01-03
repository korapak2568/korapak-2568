"use client"

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import {IContent} from "@/data/model/content/IContent";
import {Info} from "@/data/info/Info";
import {IPolicyContent} from "@/data/model/policy/IPolicyContent";

export default function Page() {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={Info.PrivacyPolicy.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={Info.PrivacyPolicy.title}
                BGImage="/images/page-banner/page-banner-3.jpg"
            />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {Info.PrivacyPolicy.list.map((item: IPolicyContent, iItem: number) => (
                            <div key={iItem} className="addition-ptb-20">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>

                                {item.isDetailed &&
                                    item.details?.map((detail: IContent, iDetail) => (
                                        <div key={iDetail} className="addition-ptb-20">
                                            <h4>{detail.title}</h4>
                                            <p>{detail.description}</p>
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
