import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import {IContent} from "@/data/model/IContent";
import {INFO} from "@/data/INFO";

export default function TermsOfService() {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Terms Of Service"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Terms Of Service"
                BGImage="/images/page-banner/page-banner-3.jpg"
            />

            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        {INFO.TERM_OF_SERVICE.list.map((item: IContent, index: number) => (
                            <div key={index} className="addition-ptb-20">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.expand}</p>
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
