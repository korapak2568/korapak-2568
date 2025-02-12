import {Info} from "@/data/info/Info";
import Image from "next/image";
import React from "react";

export default function ContactWhatsApp() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-chorn whatsapp">
                    <a href={Info.Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={Info.Images.whatsapp.md.path}
                            alt="WhatsApp"
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}