import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function AiBannerFahLeft({lang}: { lang: string }) {
    return (
        <div className="col-lg-6">
            <div className="main-banner-content">
                <h1>{InfoTranslation[lang].AiFahCover.title}</h1>

                <div className="main-banner-content-ai">
                    {InfoTranslation[lang].AiFahCover.contents.map((content, index) => (
                        <p key={index} className="p-left mb-2">
                            {content}
                        </p>
                    ))}

                </div>

                <div className="banner-btn">
                    <a href={InfoTranslation[lang].AiFahCover.line.link} target={"_blank"}>
                        <Image
                            src={InfoTranslation[lang].AiFahCover.line.button}
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
