"use client"

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import {Info} from "@/data/info/Info";
import {IPolicyContent} from "@/data/model/policy/IPolicyContent";

export default function Page() {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={Info.WorkplacePolicy.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={Info.WorkplacePolicy.title}
                BGImage="/images/page-banner/page-banner-3.jpg"
            />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {Info.WorkplacePolicy.list.map((item: IPolicyContent, index: number) => (
                            <div key={index} className="addition-ptb-20">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
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
