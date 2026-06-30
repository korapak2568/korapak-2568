// src/components/SmartCity/SystemExplanation.tsx

import { ISmartCitySection } from "@/lib/model/ISmartCityLanding";
import SmartCityResponsiveImage from "@/components/SmartCity/SmartCityResponsiveImage";

export default function SystemExplanation(
  {
    headline,
    paragraphs,
    image,
    tags,
  }: ISmartCitySection,
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
          <SmartCityResponsiveImage
            image={image}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <div className="neo-tag-smart-city">{tags?.join(", ")}</div>
        </div>
      )}
    </section>
  );
}
