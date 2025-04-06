import React from "react";
import Image from "next/image";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Left() {
    const locale = useLocale()

    return (
        <div className="col-lg-6">
            <div className="main-banner-content">
                <h1>{InfoTranslation[locale.value].AiFahCover.title}</h1>

                <div className="main-banner-content-ai">
                    {InfoTranslation[locale.value].AiFahCover.contents.map((content, index) => (
                        <p key={index} className="p-left mb-2">
                            {content}
                        </p>
                    ))}

                </div>

                <div className="banner-btn">
                    <a href={InfoTranslation[locale.value].AiFahCover.line.link} target={"_blank"}>
                        <Image
                            src={InfoTranslation[locale.value].AiFahCover.line.button}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={36}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
