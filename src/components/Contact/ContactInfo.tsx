"use client";

import React from "react";
import {IContactDetail} from "@/data/contact/model/IContactDetail";
import {Info} from "@/data/info/Info";
import Image from "next/image";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {Info.Contact.contacts.map((item: IContactDetail, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact-info-box contact-info-box-custom">
                                    <div className="icon hover-rotate">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>{item.label}</h3>
                                    <p>
                                        {
                                            item.isLink ?
                                                <a href={item.link} target="_blank">{item.linkText}</a> :
                                                <span>{item.linkText}</span>
                                        }
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box contact-info-box-custom">
                                <a href={Info.Contact.line.link} target={'_blank'}>
                                    <Image
                                        src={Info.Contact.line.iconImageLink}
                                        alt="เพิ่มเพื่อน"
                                        width={240}
                                        height={72}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
