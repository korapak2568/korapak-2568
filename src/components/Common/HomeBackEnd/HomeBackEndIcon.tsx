import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HomeBackEndIcon({lang}: { lang: string }) {
    return (
        <div className="home-backend-icon-container">
            {InfoTranslation[lang].FullStack.stacks.map((item: IFullStackStack, index: any) => (
                <div key={index}
                     className={`home-backend-icon${item.image.includes(`nodejs`) ? ' icon-orange' : ''}`}>
                    <Link href={`/${lang}/${item.link}`}>
                        <Image
                            className="hover-rotate image-box"
                            src={item.image}
                            alt={item.alt}
                            width={150}
                            height={150}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}