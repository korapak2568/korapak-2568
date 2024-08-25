"use client";

import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Image from "next/image";
import {IContact} from "@/data/model/IContact";

const ContactInfo: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">

                        {service.CONTACTS.map((item: IContact, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact-info-box">
                                    {
                                        item.isLINE ?
                                            <div className="icon addition-img-icon">
                                                <Image
                                                    src={service.IMAGES.line.icon.path}
                                                    alt={service.IMAGES.line.icon.title}
                                                    width={60}
                                                    height={60}
                                                />
                                            </div> :
                                            <div className="icon">
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
