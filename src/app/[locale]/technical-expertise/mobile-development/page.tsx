import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import {headers} from "next/headers";

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <PageBanner pageTitle="Mobile App Development"/>
        </>
    );
};