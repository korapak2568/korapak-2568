// src/components/ServicePackages/ServicePremiumPackages.tsx
import {FaCode, FaEthereum, FaBug} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServicePremiumPackages({lang}: { lang: string }) {
    const premium = InfoTranslation[lang].ServicePackages.premium;
    const planColors = ['#b9e4ea', '#cdeef2', '#d8f4f8'];

    return (
        <div className="service-row gradient-border">
            <div className="service-left premium">
                <h2><FaCode/>{premium.name}</h2>
                <p>{premium.description}</p>
            </div>

            <div className="service-right">
                {premium.plans.map((plan, index) => (
                    <Link
                        key={index}
                        href={`/${lang}/${plan.link}`}
                        className="plan-container"
                        style={{background: planColors[index]}}
                    >
                        <div className="plan-detail premium">
                            <strong>
                                {plan.name.toLowerCase().includes("urgent") ? <FaBug/> :
                                    plan.name.toLowerCase().includes("web3") ? <FaEthereum/> : <FaCode/>}
                                <span>{plan.name}</span>
                            </strong>
                            <p>{plan.highlight}</p>
                        </div>
                        <div className="plan-price premium">{plan.price}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}