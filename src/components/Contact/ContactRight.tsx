import "@/styles/about.scss"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {
    FaEnvelope,
    FaMapMarkedAlt,
    FaMobileAlt,
    FaPhone,
    FaPlaneDeparture,
    FaShoppingBag,
    FaUniversity
} from "react-icons/fa";
import {Contact2025} from "@/data/contact/Contact2025";

export default function ContactRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-8">
            <div className="about-content about-contact">
                {/*{InfoTranslation[lang].About.contact.description}*/}

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
                                        item.officePhone &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaPhone/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.officePhone}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.mobilePhone &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaMobileAlt/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.mobilePhone}
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
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyShopping &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaShoppingBag/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyShopping}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity1 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity1}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity2 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity2}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyAirport &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaPlaneDeparture/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyAirport}
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