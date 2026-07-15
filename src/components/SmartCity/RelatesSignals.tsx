// src/components/SmartCity/RelatesSignals.tsx

import Link from "next/link"
import {getLocalizedRoute} from "@/lib/localizedRoute";
import { ISmartCitySection } from "@/lib/model/ISmartCityLanding";
import SmartCityResponsiveImage from "@/components/SmartCity/SmartCityResponsiveImage";

export default function RelatesSignals(
  {
    lang,
    signals,
  }: {
    lang?: string;
    signals: ISmartCitySection[];
  },
) {
  if (!signals?.length) return null;

  return (
    <section className="related-signals">
      <h2>Related Urban Signals</h2>

      <div className="related-signals__grid">
        {signals.map((signal, index) => {
          const href = signal.landingUrl ?? signal.cta?.href;
          if (!href) return null;

          const locale = signal.lang ?? lang ?? "en";

          return (
            <Link
              key={index}
              href={getLocalizedRoute(locale, href)}
              className="related-signals__item"
            >
              {signal.image && (
                <SmartCityResponsiveImage
                  image={signal.image}
                  variant="card"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}

              <div className="related-signals__content">
                <h3>{signal.headline}</h3>
                {signal.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
