import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FrontEndModuleBottom: React.FC<{ lang: string }> = ({lang}) => {

    return (
        <>
            {
                InfoTranslation[lang].FrontEnd.stacks.slice(0, -2).map((item: IFrontEndStack, index: number) => (
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
                                <Link href={'/' + lang + item.link}>
                                    {item.title}
                                </Link>
                            </h3>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default FrontEndModuleBottom