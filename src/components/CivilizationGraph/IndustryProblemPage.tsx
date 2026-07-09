import {
  CgdBreadcrumbs,
  CgdLinkList,
  CgdTagList,
} from "@/components/CivilizationGraph/CgdPageSections";
import type { IndustryProblemPageData } from "@/lib/cgd/loader";
import { routeSegment } from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";

function getSearchTitlePart(title: string | undefined, fallback: string, index = 0) {
  return title?.split(" | ")[index]?.trim() || fallback;
}

type IndustryPageInfo = {
  detail?: {
    hero?: { eyebrow?: string; description_template?: string };
    overview?: { eyebrow?: string; description?: string };
    why_it_matters?: {
      eyebrow?: string;
      title_template?: string;
      description_template?: string;
    };
    roadmap_section?: { eyebrow?: string; title?: string };
    business_section?: { eyebrow?: string; title?: string };
    technology_section?: { eyebrow?: string; title?: string };
    related_problems_section?: { eyebrow?: string; title_template?: string };
    related_industries_section?: { eyebrow?: string; title?: string };
    internal_links_section?: { eyebrow?: string; title?: string };
  };
};

export default async function IndustryProblemPage({
  data,
  lang,
}: {
  data: IndustryProblemPageData;
  lang: string;
}) {
  const pageInfo = (await getLayerPageInfo<IndustryPageInfo>("industries", lang)).detail;
  const problemName = getSearchTitlePart(data.search?.title, data.problem.name, 0);
  const subNodeName = getSearchTitlePart(data.search?.title, data.subNode.name, 1);
  const nodeName = getSearchTitlePart(data.search?.title, data.node.name, 2);
  const heroDescription = data.search?.description;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-industry-page">
      <section className="cgd-hero">
        <CgdBreadcrumbs
          lang={lang}
          items={[
            { label: nodeName },
            { label: subNodeName },
            { label: problemName },
          ]}
        />
        <span className="platform-eyebrow">{pageInfo?.hero?.eyebrow ?? ""}</span>
        <h1>{problemName}</h1>
        <p>
          {heroDescription ??
            formatPageInfoTemplate(
              pageInfo?.hero?.description_template ??
                "{problemName} is a current challenge inside {nodeName}, especially around {subNodeName}. The Civilization Graph connects this problem to future roadmap solutions, business opportunities, and related knowledge paths.",
              {
                nodeName,
                problemName,
                subNodeName,
              },
            )}
        </p>
      </section>

      <section className="platform-shell cgd-grid cgd-summary-grid">
        <article className="cgd-panel cgd-panel--featured">
          <span>{pageInfo?.overview?.eyebrow ?? "Current Problem"}</span>
          <h2>{problemName}</h2>
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.why_it_matters?.eyebrow ?? "Why It Matters"}</span>
          <h2>
            {formatPageInfoTemplate(
              pageInfo?.why_it_matters?.title_template ?? "{subNodeName} Pressure Point",
              { subNodeName },
            )}
          </h2>
          <p>
            {formatPageInfoTemplate(
              pageInfo?.why_it_matters?.description_template ??
                "Solving this challenge can unlock better services, stronger infrastructure, and new operating models across {nodeName}.",
              { nodeName },
            )}
          </p>
        </article>
      </section>

      <section className="platform-shell cgd-section">
        <div className="platform-section__header">
          <span>{pageInfo?.roadmap_section?.eyebrow ?? "Future Roadmap Solutions"}</span>
          <h2>{pageInfo?.roadmap_section?.title ?? ""}</h2>
        </div>
        <CgdLinkList
          lang={lang}
          items={data.solutionItems.map(({ era, item, url }) => ({
            label: item.title,
            href: url,
            meta: era.title,
          }))}
        />
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{pageInfo?.business_section?.eyebrow ?? ""}</span>
          <h2>{pageInfo?.business_section?.title ?? "Commercial paths"}</h2>
          <CgdLinkList
            lang={lang}
            items={data.businessOpportunities.map((opportunity) => ({
              label: opportunity.name,
              href: `/business-opportunities/${routeSegment(data.node.id)}/${routeSegment(
                opportunity.id,
              )}/`,
              meta: opportunity.era_title,
            }))}
          />
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.technology_section?.eyebrow ?? "Related Technologies"}</span>
          <h2>{pageInfo?.technology_section?.title ?? "Technology domains"}</h2>
          <CgdTagList items={data.relatedTechnologies} />
        </article>
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{pageInfo?.related_problems_section?.eyebrow ?? "Related Problems"}</span>
          <h2>
            {formatPageInfoTemplate(
              pageInfo?.related_problems_section?.title_template ?? "Other challenges in {nodeName}",
              { nodeName },
            )}
          </h2>
          <ul className="cgd-tag-list">
            {data.relatedProblems.map((problem) => (
              <li key={problem.id}>{problem.name}</li>
            ))}
          </ul>
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.related_industries_section?.eyebrow ?? "Related Industries"}</span>
          <h2>{pageInfo?.related_industries_section?.title ?? "Adjacent nodes"}</h2>
          <ul className="cgd-tag-list">
            {data.relatedIndustries.map((node) => (
              <li key={node.id}>{node.name}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="platform-shell cgd-section">
        <div className="platform-section__header">
          <span>{pageInfo?.internal_links_section?.eyebrow ?? "Internal Links"}</span>
          <h2>{pageInfo?.internal_links_section?.title ?? "Graph navigation"}</h2>
        </div>
        <CgdLinkList lang={lang} items={data.internalLinks} />
      </section>
    </main>
  );
}