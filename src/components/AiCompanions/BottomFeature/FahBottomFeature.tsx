import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Image from "next/image";
import React from "react";

export default function FahBottomFeature({lang}: { lang: string }) {
    return (
        <>
            {InfoTranslation[lang].AiCompanions.fah.features.map((feature, index: number) => (
                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                    <div className={'unique-features-container'}>
                        <h3>{feature.title}</h3>

                        {index == 0 &&
                            <a href={InfoTranslation[lang].AiCompanions.fah.line.link}
                               target={'_blank'}>
                                <Image
                                    src={InfoTranslation[lang].AiCompanions.fah.line.button}
                                    alt="เพิ่มเพื่อน"
                                    width={120}
                                    height={36}
                                />
                            </a>
                        }
                    </div>

                    <p>{feature.description}</p>

                    <ul className="feature-list">
                        {feature.items.length > 1 && feature.items.map((item, index: number) => (
                            <li key={index} className="feature-item">
                                <div className="icon">
                                    <i className="flaticon-check"></i>
                                </div>
                                <div className="content">
                                    <strong>{item.title}</strong>
                                    <p>  {item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}