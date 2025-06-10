import "@/styles/about.scss"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {FaEnvelope, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";

export default function ContactRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-8">
            <div className="about-content about-contact">
                {InfoTranslation[lang].About.contact.description}

                <div className="roles">
                    {InfoTranslation[lang].About.contact.roles.map((item, index) => {
                        return (
                            <div key={index} className="role">
                                <h3>{item.title}<span>{item.span}</span></h3>
                                <>
                                    {
                                        item.email &&
                                        <div className="item">
                                            <div className="icon">
                                                <FaEnvelope/>
                                            </div>
                                            <div className="label">
                                                {item.email}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.telephone &&
                                        <div className="item">
                                            <div className="icon">
                                                <FaPhoneAlt/>
                                            </div>
                                            <div className="label">
                                                {item.telephone}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.address &&
                                        <div className="item">
                                            <div className="icon">
                                                <FaMapMarkedAlt/>
                                            </div>
                                            <div className="label">
                                                {item.address}
                                            </div>
                                        </div>
                                    }
                                </>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}