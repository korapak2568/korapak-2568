import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Image from "next/image";
import Link from "next/link";
import {headers} from "next/headers";

const CloudDevOpsModuleStack: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            {InfoTranslation[lang].DevOps.stacks.map((item: IFrontEndStack, index: number) => (
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

export default CloudDevOpsModuleStack;