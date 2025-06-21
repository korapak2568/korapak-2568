// src/components/ServicePackages/ServicePlatinumPackages.tsx
import {FaCrown, FaLightbulb, FaLink, FaImages} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServicePlatinumPackages({lang}: { lang: string }) {
    const platinum = InfoTranslation[lang].ServicePackages.platinum
    const planColors = ['#d5dbe4', '#e7edf5', '#f2f5fa'];

    return (
        <div className="service-row border-platinum">
            <div className="service-left platinum">
                <h2>
                    <FaCrown/>
                    {platinum.name}
                </h2>
                <p>{platinum.description}</p>
            </div>

            <div className="service-right">
                {platinum.plans.map((plan, index) => {
                    const prices = plan.price.split("/")

                    return (
                        <Link
                            key={index}
                            href={`/${lang}/${plan.link}`}
                            className="plan-container"
                            style={{background: planColors[index]}}
                        >
                            <div className="plan-detail platinum">
                                <strong>
                                    {index == 0 ? <FaLightbulb/> : index == 1 ? <FaLink/> : <FaImages/>}
                                    <span>{plan.name}</span>
                                </strong>
                                <p>{plan.highlight}</p>
                            </div>
                            <div className="plan-price platinum">
                                <strong>{prices[0]}</strong>
                                <p>{prices[1]}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}