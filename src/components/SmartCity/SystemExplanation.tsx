// src/components/SmartCity/SystemExplanation.tsx

import Image from "next/image";
import {ISmartCitySection} from "@/lib/model/ISmartCityLanding";
import {
    getPlatformImageAlt,
    getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function SystemExplanation(
    {
        lang,
        headline,
        paragraphs,
        image,
        tags
    }:
    ISmartCitySection
) {
    return (
        <section className="system-explanation">
            <div className="system-explanation__content">
                <h2>{headline}</h2>

                {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            {image && (
                <div className="system-explanation__image">
                    <Image
                        src={getPlatformImageSrc(image, "desktop")}
                        alt={getPlatformImageAlt(image, "desktop")}
                        width={1200}
                        height={800}
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />

                    <div className={'neo-tag-smart-city'}>
                        {tags?.join(", ")}
                    </div>
                </div>
            )}
        </section>
    );
}
