import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Link from "next/link";
import Image from "next/image";

export default function FahSideRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="portfolio-details-information ml-10 x-green-border">
                <ul className={'ul-custom'}>
                    {InfoTranslation[lang].AiCompanions.fah.sidebars.map((sidebar, index: number) => (
                        <li key={index} className={'li-sidebar-custom'}>
                            <div className="icon x-orange-font">
                                <i className={sidebar.icon}></i>
                            </div>
                            <span>{sidebar.caption}</span>
                            {sidebar.text}
                        </li>
                    ))}

                    {InfoTranslation[lang].AiCompanions.fah.relevants.map((ai, index) => (
                        <Link key={index} href={'/' + lang + ai.pages.landing.link}>
                            <li className="li-sidebar-relevant">
                                <Image
                                    src={ai.thumbnail}
                                    alt="image"
                                    width={650}
                                    height={500}
                                />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}