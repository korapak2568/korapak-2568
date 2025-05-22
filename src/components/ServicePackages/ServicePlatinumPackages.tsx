// src/components/ServicePackages/ServicePlatinumPackages.tsx
import {FaCrown, FaLightbulb, FaLink, FaImages} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServicePlatinumPackages({lang}: { lang: string }) {
    const platinum = InfoTranslation[lang].ServicePackages.platinum
    const planColors = ['#d5dbe4', '#e7edf5', '#f2f5fa'];

    return (
        <div className="service-row">
            <div className="service-left platinum">
                <h2>
                    <FaCrown/>
                    {platinum.name}
                </h2>
                <p>{platinum.description}</p>
            </div>

            <div className="service-right">
                {platinum.plans.map((plan, index) => (
                    <Link
                        key={index}
                        href={`/${lang}/${plan.link}`}
                        className="plan-container"
                        style={{background: planColors[index]}}
                    >
                        <div className="plan-detail platinum">
                            <strong>
                                {
                                    plan.name.toLowerCase().includes("premium innovation") ? <FaLightbulb/> :
                                        plan.name.toLowerCase().includes("web3 core plan") ? <FaLink/> : <FaImages/>
                                }
                                <span>{plan.name}</span>
                            </strong>
                            <p>{plan.highlight}</p>
                        </div>
                        <div className="plan-price platinum">
                            {plan.price}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}