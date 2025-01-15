import React from "react";
import {Info} from "@/data/info/Info";
import Image from "next/image";

export const ContactSidebar: React.FC = () => {
    return (

        <div className="services-contact-info">
            <h3>Contact</h3>

            <div>
                <a href={Info.Contact.chorn.link} target={'_blank'}>
                    <Image
                        src={Info.Contact.chorn.iconImageLink}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={36}
                    />
                </a>
            </div>

        </div>
    )
}