import React from "react";
import {headers} from "next/headers";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Image from "next/image";
import Link from "next/link";

const WebDevelopmentBackEndStack: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            {InfoTranslation[lang].FullStack.stacks.slice(0, -3).map((item: IFrontEndStack, index: number) => (
                <div key={index} className="col-lg-4 col-md-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={120}
                            />
                        </div>

                        <h3>
                            <Link href={'/' + lang + item.link}>{item.title}</Link>
                        </h3>
                    </div>
                </div>
            ))}
        </>
    )
}

export default WebDevelopmentBackEndStack;