import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import {headers} from "next/headers";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <PageBanner pageTitle="Mobile App Development"/>
            <HomeFeatureMain lang={lang}/>
        </>
    );
};