import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Footer from "../../../components/Layouts/Footer";
import PageBanner from "@/components/Common/PageBanner";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {Metadata404} from "@/metadata/pages/404/common/Metadata404";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return Metadata404[lang]
}

export default function FindNotFound() {
    const lang = headers().get('x-locale') || 'en';
    const title: string = typeof (Metadata404[lang].title) == "string" ? Metadata404[lang].title : '404 - Page Not Found';
    const description: string = typeof (Metadata404[lang].description) == "string" ? Metadata404[lang].description : '404 - Page Not Found';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={title}/>

            <div className="text-center">
                <div className="ptb-100">
                    {description} {" -->> "}
                    <strong>
                        <Link href={'/'}>{InfoTranslation[lang].Navbar[0].label}</Link>
                    </strong>
                </div>
            </div>

            <Footer/>
        </>
    );
}