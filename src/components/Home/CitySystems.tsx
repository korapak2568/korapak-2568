// src/components/smart-city-media/CitySystems.tsx

import Image from "next/image";
import Link from "next/link";
import {ICitySystems} from "@/lib/model/ISmartCityMedia";
import {
    getPlatformImageAlt,
    getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function CitySystems({lang, data}: { lang: string; data: ICitySystems }) {
    const {headline, paragraph, systems} = data

    return (
        <section className="city-systems">
            <div className="city-systems__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="city-systems__grid">
                {systems.map((system, index) => (
                    <Link
                        key={index}
                        href={`/${lang}` + system.landingUrl}
                        className="city-systems__item"
                    >
                        <div className="city-systems__image">
                            <Image
                                src={getPlatformImageSrc(system.image, "thumbnail")}
                                alt={getPlatformImageAlt(system.image, "thumbnail")}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="city-systems__content">
                            <h3>{system.title}</h3>
                            <p>{system.description}</p>

                            <ul className="city-systems__signals">
                                {system.balanceSignals.map((signal, i) => (
                                    <li key={i}>{signal}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
