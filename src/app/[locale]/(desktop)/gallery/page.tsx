import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/main/MetadataGallery";

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
        </>
    );
}