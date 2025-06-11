import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/main/MetadataGallery";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <GalleryPageMain lang={lang}/>
            <GalleryModuleBottom/>
            <CloudExperience lang={lang}/>
            <AiAomLandingPage lang={lang}/>
            <HomeFeatureMain lang={lang} isTopSpace={true} isHideTopTitle={true}/>
        </>
    );
}