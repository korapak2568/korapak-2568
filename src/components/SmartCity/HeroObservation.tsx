// src/components/SmartCity/HeroObservation.tsx

import Image from "next/image";
import Link from "next/link";
import {ISmartCitySection} from "@/lib/model/ISmartCityLanding";
import {
    getPlatformImageAlt,
    getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function HeroObservation(
    {
        lang,
        headline,
        paragraphs,
        image,
        tags,
        cta
    }: ISmartCitySection
) {

    return (
        <section className="hero-observation">
            <div className="hero-observation__content">
                <h1>{headline}</h1>

                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}

                {cta && (
                    <Link href={`/${lang}` + cta.href} className="hero-observation__cta">
                        {cta.label}
                    </Link>
                )}
            </div>

            <div className="hero-observation__image">
                {
                    image && <Image
                        src={getPlatformImageSrc(image, "desktop")}
                        alt={getPlatformImageAlt(image, "desktop")}
                        width={1200}
                        height={800}
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                }

                <div className={'neo-tag-smart-city'}>
                    {tags?.join(", ")}
                </div>
            </div>
        </section>
    );
}
