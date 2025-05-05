import React from "react";
import AiPloyLandingPage from "@/components/AiCompanions/Main/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/metadata/main/MetadataAiPloy";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiPloy[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <AiPloyLandingPage lang={lang}/>
    )
}