import {Info} from "@/data/info/Info";
import Image from "next/image";
import React from "react";

export default function LineContact() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-line-oa">
                    <Image
                        src={Info.Images.logo.line.sm.path}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={120}
                    />
                </div>
                <h3>
                    {Info.Contact.lineoa.label}
                </h3>
                <p>
                    {Info.Contact.lineoa.linkText}
                </p>
            </div>
        </div>
    )
}