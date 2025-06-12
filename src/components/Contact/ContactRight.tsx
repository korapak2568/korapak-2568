import "@/styles/about.scss"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {FaEnvelope, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";
import {Contact2025} from "@/data/contact/Contact2025";

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
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaEnvelope/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.email}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.telephone &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaPhoneAlt/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.telephone}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.locations &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaMapMarkedAlt/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                <a target={"_blank"} href={Contact2025.location.link}>
                                                    {item.locations.office}
                                                </a>

                                                <ul>
                                                    {item.locations.nearby?.map((near, index) => (
                                                        <li key={index}>{near}</li>
                                                    ))}
                                                </ul>
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