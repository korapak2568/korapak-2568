import {
  CgdBreadcrumbs,
  CgdLinkList,
  CgdTagList,
} from "@/components/CivilizationGraph/CgdPageSections";
import type { BusinessOpportunityPageData } from "@/lib/cgd/loader";
import { routeSegment } from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";

function getSearchTitlePart(title: string | undefined, fallback: string, index = 0) {
  return title?.split(" | ")[index]?.trim() || fallback;
}

type BusinessPageInfo = {
  detail?: {
    hero?: { eyebrow?: string; description_template?: string };
    overview?: { eyebrow?: string; description_template?: string };
    related_industry?: { eyebrow?: string; description_template?: string };
    roadmap_section?: { eyebrow?: string; title?: string };
    related_problems_section?: { eyebrow?: string; title?: string; empty_text?: string };
    technology_section?: { eyebrow?: string; title?: string };
    related_business_section?: { eyebrow?: string; title?: string };
    internal_links_section?: { eyebrow?: string; title?: string };
  };
};

type BusinessRoadmapItem = BusinessOpportunityPageData["roadmapItems"][number]["item"];

function getRoadmapThumbnail(item: BusinessRoadmapItem) {
  const thumbnail = item.image.thumbnail;

  return thumbnail
    ? {
        alt: thumbnail.alt ?? item.image.alt ?? item.title,
        height: thumbnail.height,
        src: thumbnail.src,
        width: thumbnail.width,
      }
    : undefined;
}

export default async function BusinessOpportunityPage({
  data,
  lang,
}: {
  data: BusinessOpportunityPageData;
  lang: string;
}) {
  const pageInfo = (await getLayerPageInfo<BusinessPageInfo>("business_opportunities", lang)).detail;
  const opportunityName = getSearchTitlePart(data.search?.title, data.opportunity.name, 0);
  const subNodeName = getSearchTitlePart(data.search?.title, data.subNode.name, 1);
  const nodeName = getSearchTitlePart(data.search?.title, data.node.name, 2);
  const heroDescription = data.search?.description;
  const thumbnailByInternalHref = new Map(
    data.roadmapItems.map(({ item, url }) => [url, getRoadmapThumbnail(item)]),
  );

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-business-page">
      <section className="cgd-hero">
        <CgdBreadcrumbs
          lang={lang}
          items={[{ label: nodeName }, { label: opportunityName }]}
        />
        <span className="platform-eyebrow">{pageInfo?.hero?.eyebrow ?? "Business Opportunity"}</span>
        <h1>{opportunityName}</h1>
        <p>
          {heroDescription ??
            formatPageInfoTemplate(
              pageInfo?.hero?.description_template ??
                "{opportunityName} is a future-facing opportunity in {nodeName}, focused on {subNodeName}. This page connects the opportunity to roadmap eras, related problems, technologies, and adjacent businesses.",
              {
                nodeName,
                opportunityName,
                subNodeName,
              },
            )}
        </p>
      </section>

      <section className="platform-shell cgd-grid">
        <article className="cgd-panel cgd-panel--featured">
          <span>{pageInfo?.overview?.eyebrow ?? ""}</span>
          <h2>{opportunityName}</h2>
          <p>
            {formatPageInfoTemplate(
              pageInfo?.overview?.description_template ??
                "The opportunity belongs to {subNodeName} and is anchored to {eraId}, making it part of the wider Future Civilization roadmap.",
              { eraId: data.opportunity.era_id, subNodeName },
            )}
          </p>
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.related_industry?.eyebrow ?? "Related Industry"}</span>
          <h2>{nodeName}</h2>
          <p>
            {formatPageInfoTemplate(
              pageInfo?.related_industry?.description_template ??
                "{nodeName} contains {subNodeName} and provides the market, operational, and social context for this opportunity.",
              { nodeName, subNodeName },
            )}
          </p>
        </article>
      </section>

      <section className="platform-shell cgd-section">
        <div className="platform-section__header">
          <span>{pageInfo?.roadmap_section?.eyebrow ?? "Future Roadmap Opportunities"}</span>
          <h2>{pageInfo?.roadmap_section?.title ?? "Roadmap items from the connected era"}</h2>
        </div>
        <CgdLinkList
          lang={lang}
          items={data.roadmapItems.map(({ era, item, url }) => ({
            label: item.title,
            href: url,
            meta: era.title,
            thumbnail: item.image.thumbnail
              ? {
                  alt: item.image.thumbnail.alt ?? item.image.alt,
                  height: item.image.thumbnail.height,
                  src: item.image.thumbnail.src,
                  width: item.image.thumbnail.width,
                }
              : undefined,
          }))}
        />
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{pageInfo?.related_problems_section?.eyebrow ?? "Related Problems"}</span>
          <h2>{pageInfo?.related_problems_section?.title ?? "Current challenges nearby"}</h2>
          <ul className="cgd-tag-list">
            {data.relatedProblems.length > 0 ? (
              data.relatedProblems.map((problem) => (
                <li key={problem.id}>{problem.name}</li>
              ))
            ) : (
              <li>
                {pageInfo?.related_problems_section?.empty_text ??
                  "More problem links will appear as the graph expands."}
              </li>
            )}
          </ul>
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.technology_section?.eyebrow ?? "Related Technologies"}</span>
          <h2>{pageInfo?.technology_section?.title ?? "Technology domains"}</h2>
          <CgdTagList items={data.relatedTechnologies} />
        </article>
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{pageInfo?.related_business_section?.eyebrow ?? "Related Business Opportunities"}</span>
          <h2>{pageInfo?.related_business_section?.title ?? "Adjacent business paths"}</h2>
          <CgdLinkList
            lang={lang}
            items={data.relatedBusinessOpportunities.map((opportunity) => ({
              label: opportunity.name,
              href: `/business-opportunities/${routeSegment(data.node.id)}/${routeSegment(
                opportunity.id,
              )}/`,
              meta: opportunity.era_title,
            }))}
          />
        </article>

        <article className="cgd-panel">
          <span>{pageInfo?.internal_links_section?.eyebrow ?? "Internal Links"}</span>
          <h2>{pageInfo?.internal_links_section?.title ?? "Graph navigation"}</h2>
          <CgdLinkList
            lang={lang}
            items={data.internalLinks.map((item) => ({
              ...item,
              thumbnail: thumbnailByInternalHref.get(item.href),
            }))}
          />
        </article>
      </section>
    </main>
  );
}