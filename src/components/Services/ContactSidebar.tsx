import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLanguage} from "@/provider/hooks/LanguageHook";

export const ContactSidebar: React.FC = () => {
    const locale = useLanguage()

    return (

        <div className="services-contact-info">
            <h3>Contact</h3>

            <div>
                <a href={InfoTranslation[locale.value].Contact.line.link} target={'_blank'}>
                    <Image
                        src={InfoTranslation[locale.value].Contact.line.button}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={36}
                    />
                </a>
            </div>

        </div>
    )
}