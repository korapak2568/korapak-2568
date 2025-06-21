// src/components/ServicePackages/ServicePremiumPackages.tsx
import {FaBolt, FaGem, FaImages, FaLightbulb, FaLink, FaShippingFast, FaTools} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServicePremiumPackages({lang}: { lang: string }) {
    const premium = InfoTranslation[lang].ServicePackages.premium;
    const planColors = ['#b9e4ea', '#cdeef2', '#d8f4f8'];

    return (
        <div className="service-row border-premium">
            <div className="service-left premium">
                <h2><FaGem/>{premium.name}</h2>
                <p>{premium.description}</p>
            </div>

            <div className="service-right">
                {premium.plans.map((plan, index) => {
                    const prices = plan.price.split("/")

                    return (
                        <Link
                            key={index}
                            href={`/${lang}/${plan.link}`}
                            className="plan-container"
                            style={{background: planColors[index]}}
                        >
                            <div className="plan-detail premium">
                                <strong>
                                    {index == 0 ? <FaBolt/> : index == 1 ? <FaShippingFast/> : <FaTools/>}
                                    <span>{plan.name}</span>
                                </strong>
                                <p>{plan.highlight}</p>
                            </div>
                            <div className="plan-price premium">
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