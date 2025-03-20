import React from "react";
import Image from "next/image";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Left() {
    const locale = useLocale()

    return (
        <div className="col-lg-6">
            <div className="main-banner-content">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    {InfoTranslation[locale.value].AiFahCover.title}
                </h1>

                <div className="main-banner-content-ai">
                    {InfoTranslation[locale.value].AiFahCover.contents.map((content, index) => (
                        <p
                            key={index}
                            className="p-left mb-2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            {content}
                        </p>
                    ))}

                </div>

                <div
                    className="banner-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-once="true"
                >
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
