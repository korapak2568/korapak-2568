import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ISmartImage } from "@/lib/model/ISmartMobility";
import {
    getPlatformImageAlt,
    getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function RightChiangMai(
    { lang, rightItems }: {
        lang: string,
        rightItems: ISmartImage[]
    }
) {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="smart-right-container">
                <ul className="smart-right-list">
                    {
                        rightItems.map((item: ISmartImage, index) =>
                            <li key={index} className="smart-right-item">
                                <Link href={'/' + lang + item.link}>
                                    <div className="smart-right-image-wrapper">
                                        {
                                            item.image &&
                                            <Image
                                                src={getPlatformImageSrc(
                                                    item.image,
                                                    "thumbnail",
                                                )}
                                                alt={getPlatformImageAlt(
                                                    item.image,
                                                    "thumbnail",
                                                )}
                                                width={650}
                                                height={500}
                                            />
                                        }

                                        <div className="smart-right-caption">
                                            <strong>
                                                {
                                                    item.title.length > 35 ?
                                                        item.title.slice(0, 35) + "..." : item.title
                                                }</strong>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
