import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/main/MetadataGallery";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <GalleryPageMain lang={lang}/>
            <GalleryModuleBottom/>
        </>
    );
}
