import React from "react";
import AiFahLandingPage from "@/components/AiCompanions/Main/AiFahLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiFah} from "@/metadata/main/MetadataAiFah";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiFah[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <AiFahLandingPage lang={lang}/>
    );
}