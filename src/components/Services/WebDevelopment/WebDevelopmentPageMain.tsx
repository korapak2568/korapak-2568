"use client";

import SystemCapability from "@/components/Services/WebDevelopment/SystemCapability";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";
import { usePlatformTechnologyContent } from "@/lib/platform-content/usePlatformTechnologyContent";

export default function WebDevelopmentPageMain({
  lang,
  content,
}: {
  lang: string;
  content: PlatformTechnologyContent;
}) {
  const { data: cachedContent } = usePlatformTechnologyContent(lang, content);
  const technologyContent = cachedContent ?? content;
  const pageContent = technologyContent.page;

  return (
    <main className="technology-premium-page">
      <section className="policy-page__hero technology-document-hero">
        <div className="platform-shell policy-page__hero-inner">
          <div className="technology-document-hero__heading">
            <span className="platform-eyebrow">{pageContent.summary.label}</span>
            <h1>{pageContent.title}</h1>
            <h2>{pageContent.hero.subtitle}</h2>
          </div>
          <div className="policy-page__hero-copy">
            <p>{pageContent.hero.body}</p>
          </div>
          <aside
            className="policy-page__summary"
            aria-label={`${pageContent.title} summary`}
          >
            <span>{pageContent.summary.label}</span>
            <strong>{pageContent.summary.value}</strong>
            <small>{pageContent.summary.caption}</small>
          </aside>
        </div>
      </section>

      <section
        className="technology-system-capability"
        aria-label={pageContent.sections.systemCapability.ariaLabel}
      >
        <div className="technology-premium-container">
          <h1>{pageContent.sections.systemCapability.title}</h1>
          <SystemCapability
            items={pageContent.sections.systemCapability.items}
          />
        </div>
      </section>

      <section className="technology-premium-module technology-premium-module--stacks technology-premium-container">
        <h1 className="technology-premium-module__title">
          {pageContent.sections.deliveryStack.title}
        </h1>
        <WevDevelopmentFrontEnd
          lang={lang}
          frontEnd={technologyContent.frontEnd}
        />
        <WebDevelopmentBackEnd
          lang={lang}
          fullStack={technologyContent.fullStack}
        />
      </section>
    </main>
  );
}
