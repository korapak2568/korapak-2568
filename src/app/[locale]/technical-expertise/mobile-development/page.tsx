import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import {headers} from "next/headers";

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <PageBanner pageTitle="Mobile App Development"/>
        </>
    );
};

export default Page;
