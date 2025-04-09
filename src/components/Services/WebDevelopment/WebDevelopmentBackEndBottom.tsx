import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentBackEndBottom({lang}: { lang: string }) {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
            <div className="container">
                <div className="row">
                    {InfoTranslation[lang].FullStack.stacks.slice(0, 6).map((item: IFrontEndStack, index: number) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <Link href={'/' + lang + item.link}>
                                <div className="home-frontend-box">
                                    <div className="icon hover-rotate">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={150}
                                            height={150}
                                        />
                                    </div>

                                    <h3> {item.title} </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}