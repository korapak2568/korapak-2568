"use client"

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContent} from "@/data/model/IContent";

export default function Page() {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={service.WORKPLACE_POLICY.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service.WORKPLACE_POLICY.title}
                BGImage="/images/page-banner/page-banner-3.jpg"
            />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {service.WORKPLACE_POLICY.list.map((item: IContent, index: number) => (
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
