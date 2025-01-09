"use client";

import React from "react";
import {IContactDetail} from "@/data/contact/model/IContactDetail";
import {Info} from "@/data/info/Info";
import ChornContact from "@/components/Contact/CustomContact/ChornContact";
import LineContact from "@/components/Contact/CustomContact/LineOAContact";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area ptb-100">
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

                        <ChornContact/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
