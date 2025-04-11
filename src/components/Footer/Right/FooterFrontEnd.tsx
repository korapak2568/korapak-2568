import React from "react";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import Image from "next/image";

export default function FooterFrontEnd({lang}: { lang: string }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[lang].Footer.frontend.title}</h3>
                <div className="footer-bar"/>
                <ul className="footer-list">
                    {InfoTranslation[lang].FrontEnd.stacks.map((item: IFullStackStack, index: number) => {
                        return (
                            <li key={index} className="feature-item">
                                <div className="feature-icon-container">
                                    <Link href={'/' + lang + item.link}>
                                        <Image src={item.image} alt={item.alt} width="30" height="30"/>
                                        <span className="feature-title">
                                            {item.features[0].title}
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}