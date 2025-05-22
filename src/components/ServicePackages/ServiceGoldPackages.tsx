// src/components/ServicePackages/ServiceGoldPackages.tsx
import {FaShieldAlt, FaChartLine, FaCube} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServiceGoldPackages({lang}: { lang: string }) {
    const gold = InfoTranslation[lang].ServicePackages.gold;
    const planColors = ['#ffe69a', '#ffdfa2', '#ffedc2'];

    return (
        <div className="service-row gold">
            <div className="service-left">
                <h2><FaShieldAlt/>{gold.name}</h2>
                <p>{gold.description}</p>
            </div>

            <div className="service-right">
                {gold.plans.map((plan, index) => (
                    <Link
                        key={index}
                        href={`/${lang}/${plan.link}`}
                        className="plan-container"
                        style={{background: planColors[index]}}
                    >
                        <div className="plan-detail gold">
                            <strong>
                                {plan.name.toLowerCase().includes("essential") ? <FaShieldAlt/> :
                                    plan.name.toLowerCase().includes("growth") ? <FaChartLine/> : <FaCube/>}
                                <span>{plan.name}</span>
                            </strong>
                            <p>{plan.highlight}</p>
                        </div>
                        <div className="plan-price gold">{plan.price}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}