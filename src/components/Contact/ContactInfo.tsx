"use client";

import React from "react";
import Image from "next/image";
import {IContact} from "@/data/model/contact/IContact";
import {Info} from "@/data/info/Info";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {Info.Contact.contacts.map((item: IContact, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact-info-box">
                                    {
                                        item.isLINE ?
                                            <div className="icon addition-img-icon hover-rotate">
                                                <Image
                                                    src={Info.Images.line.icon.path}
                                                    alt={Info.Images.line.icon.title}
                                                    width={60}
                                                    height={60}
                                                />
                                            </div> :
                                            <div className="icon hover-rotate">
                                                <i className={item.icon}></i>
                                            </div>
                                    }
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
