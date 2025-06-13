import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import ContactLeft from "@/components/Contact/ContactLeft";
import ContactRight from "@/components/Contact/ContactRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ContactGalleryBottom} from "@/components/Contact/ContactGalleryBottom";

export default function ContactContent({lang}: { lang: string }) {
    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>{InfoTranslation[lang].About.contact.title}</h1>
                    <div className="row">
                        <ContactLeft lang={lang}/>
                        <ContactRight lang={lang}/>
                    </div>
                </div>
                <ContactGalleryBottom/>
            </div>

            <DefaultShape/>
        </>
    );
}
