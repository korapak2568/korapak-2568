// src/component/ServicePackages/ServiceGoldPackages.tsx
import {FaShieldAlt, FaChartLine, FaCube, FaRocket} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function ServiceGoldPackages({lang}: { lang: string }) {
    const gold = InfoTranslation[lang].ServicePackages.gold;
    const planColors = ['#ffe69a', '#ffdfa2', '#ffedc2', '#fff4d6'];

    return (
        <div className="service-row gold border-gold">
            <div className="service-left">
                <h2><FaShieldAlt/>{gold.name}</h2>
                <p>{gold.description}</p>
            </div>

            <div className="service-right">
                {gold.plans.map((plan, index) => {
                    const prices = plan.price.split("/")

                    return (
                        <Link
                            key={index}
                            href={`/${lang}/${plan.link}`}
                            className="plan-container"
                            style={{background: planColors[index]}}
                        >
                            <div className="plan-detail gold">
                                <strong>
                                    {index == 0 ? <FaRocket/> : (index == 1 ? <FaChartLine/> : <FaCube/>)}
                                    <span>{plan.name}</span>
                                </strong>

                                <p>{plan.highlight}</p>
                            </div>
                            <div className="plan-price gold">
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