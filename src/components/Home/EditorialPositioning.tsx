// src/components/Home/EditorialPositioning.tsx

import Image from "next/image"
import Link from "next/link"
import {IEditorialPositioning} from "@/lib/model/ISmartCityMedia";
import {
    getPlatformImageAlt,
    getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function EditorialPositioning({lang, data}: {
    lang: string;
    data: IEditorialPositioning;
}) {
    const {headline, paragraphs, principles} = data

    return (
        <section className="editorial-positioning">
            <div className="editorial-positioning__intro">
                <h2>{headline}</h2>

                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

            <div className="editorial-positioning__grid">
                {principles.map((principle) => (
                    <Link
                        key={principle.title}
                        href={`/${lang}` + principle.landingUrl}
                        className="editorial-positioning__item"
                    >

                        <div className="editorial-positioning__image">
                            <Image
                                src={getPlatformImageSrc(principle.image, "thumbnail")}
                                alt={getPlatformImageAlt(principle.image, "thumbnail")}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="editorial-positioning__content">
                            <h3>{principle.title}</h3>
                            <p>{principle.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
