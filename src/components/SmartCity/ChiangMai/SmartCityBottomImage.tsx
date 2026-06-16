import React from "react";
import Image from "next/image";
import Link from "next/link"
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";
import { getPlatformImageSrc } from "@/lib/platform-content/platformImageVariants";

type BottomCard = ISmartCityItem | ISmartSection | ISmartRoute;

export default function SmartCityBottomImage(
    {lang, bottomCards}: { lang: string; bottomCards: Array<ISmartSection | ISmartRoute> }
) {
    return (
        <div className="vision-bottom-container">
            {bottomCards.slice(0, 2).map((smartCityItem, i) => (
                <Link key={`${smartCityItem.title}-${i}`}
                      href={"/" + lang + smartCityItem.link}
                      className="vision-card">
                    <div className="vision-image-wrapper">
                        {smartCityItem.media?.image_url ? (
                            <Image
                                src={getPlatformImageSrc(
                                    {image_url: smartCityItem.media.image_url, alt: smartCityItem.title},
                                    "thumbnail",
                                )}
                                alt={smartCityItem.title}
                                className="vision-image"
                                width={800}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        ) : null}
                    </div>

                    <div className="vision-text-box">
                        <p>
                            <strong>{smartCityItem.title}</strong>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
