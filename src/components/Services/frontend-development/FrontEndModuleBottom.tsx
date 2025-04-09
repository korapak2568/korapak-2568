import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Link from "next/link";
import Image from "next/image";

export default function FrontEndModuleBottom({lang}: { lang: string }) {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
            <div className="container">
                <div className="row">
                    {InfoTranslation[lang].FrontEnd.stacks.slice(0, 6).map((item: IFrontEndStack, index: number) => (
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