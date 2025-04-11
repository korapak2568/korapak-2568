import React from "react";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/metadata/pages/ai-aom/common/MetadataAiAom";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiAom[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <AiAomLandingPage lang={lang}/>
    )
}