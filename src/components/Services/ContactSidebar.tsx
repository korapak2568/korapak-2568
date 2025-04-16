import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLanguage} from "@/provider/hooks/AppStateHook";

export const ContactSidebar: React.FC = () => {
    const language = useLanguage()

    return (

        <div className="services-contact-info">
            <h3>Contact</h3>

            <div>
                <a href={InfoTranslation[language].Contact.line.link} target={'_blank'}>
                    <Image
                        src={InfoTranslation[language].Contact.line.button}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={36}
                    />
                </a>
            </div>

        </div>
    )
}