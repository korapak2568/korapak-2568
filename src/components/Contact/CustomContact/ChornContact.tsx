import {Info} from "@/data/info/Info";
import Image from "next/image";
import React from "react";

export default function ChornContact() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-chorn">
                    <a href={Info.Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={Info.Images.logo.sm.path}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={120}
                        />
                    </a>
                </div>
                <p>
                    <a href={Info.Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={Info.Contact.chorn.iconImageLink}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={36}
                        />
                    </a>
                </p>
            </div>
        </div>
    )
}