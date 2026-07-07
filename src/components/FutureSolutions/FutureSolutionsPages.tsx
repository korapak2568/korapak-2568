import Image from "next/image";
import Link from "next/link";
import type {
  FutureSolutionEraSummary,
  FutureSolutionRecord,
} from "@/lib/future-solutions/futureSolutionsContent";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

type FutureSolutionsPageInfo = {
  index?: {
    hero?: {
      eyebrow?: string;
      title?: string;
      description?: string;
    };
    directory_section?: {
      eyebrow?: string;
      title?: string;
      card_description_template?: string;
    };
  };
  era?: {
    hero?: {
      eyebrow?: string;
      description_template?: string;
    };
    directory_section?: {
      eyebrow?: string;
      title?: string;
    };
  };
  detail?: {
    breadcrumbs?: {
      future_civilization?: string;
      future_solutions?: string;
    };
    hero?: {
      eyebrow?: string;
      view_era_solutions?: string;
      canonical_roadmap_item?: string;
    };
    solution_lens?: {
      problem_statement?: { eyebrow?: string; title?: string };
      future_solution?: { eyebrow?: string; title?: string };
      why_it_matters?: { eyebrow?: string; title?: string };
    };
    readiness?: { eyebrow?: string };
    human_impact?: { eyebrow?: string; title?: string };
    current_problems?: { eyebrow?: string; title?: string };
    industries_impacted?: { eyebrow?: string; title?: string };
    business_opportunities?: { eyebrow?: string; title?: string };
    risks?: { eyebrow?: string; title?: string };
    related?: { eyebrow?: string; title?: string };
  };
};

function tagLabel(value: string) {
  return value.replaceAll("_", " ").replaceAll("-", " ");
}

function getFutureSolutionsPageInfo(lang: string) {
  return getLayerPageInfo<FutureSolutionsPageInfo>("future-solutions", lang);
}

function SolutionCard({ lang, solution }: { lang: string; solution: FutureSolutionRecord }) {
  return (
    <article className="cgd-directory-card future-solution-card">
      <Link href={`/${lang}/future-solutions/${solution.era_slug}/${solution.era_item_slug}/`}>
        {solution.roadmap_image ? (
          <div className="future-solution-card__media">
            <Image
              src={getPlatformImageSrc(solution.roadmap_image, "thumbnail")}
              alt={getPlatformImageAlt(solution.roadmap_image, "thumbnail")}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : null}
        <div className="future-solution-card__body">
          <h3>{solution.short_title}</h3>
          <p>{solution.summary}</p>
        </div>
      </Link>
    </article>
  );
}

export function FutureSolutionsIndexPage({
  eras,
  lang,
}: {
  eras: FutureSolutionEraSummary[];
  lang: string;
}) {
  const pageInfo = getFutureSolutionsPageInfo(lang);
  const hero = pageInfo.index?.hero;
  const directorySection = pageInfo.index?.directory_section;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page future-solutions-page">
      <section className="cgd-directory-hero future-solutions-hero">
        <span className="platform-eyebrow">{hero?.eyebrow ?? ""}</span>
        <h1>{hero?.title ?? ""}</h1>
        <p>
          {hero?.description ??
            "Explore each future milestone through the problems it solves, the industries it touches, the business opportunities it creates, and the human preparation it asks for."}
        </p>
      </section>

      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{directorySection?.eyebrow ?? "Solution Map"}</span>
          <h2>{directorySection?.title ?? "Browse future solutions by roadmap era"}</h2>
        </div>
        <div className="cgd-directory-grid future-solution-era-grid">
          {eras.map((era) => (
            <article key={era.era_id} className="cgd-directory-card future-solution-era-card">
              <Link href={`/${lang}${era.url}`}>
                <h3>{era.title}</h3>
                <p>
                  {formatPageInfoTemplate(
                    directorySection?.card_description_template ??
                      "{timeframe}. Connected across {industryCount} industry nodes and readiness level {readinessLevels}.",
                    {
                      industryCount: era.industries.length,
                      readinessLevels: era.readinessLevels.join(", "),
                      timeframe: era.timeframe,
                    },
                  )}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function FutureSolutionsEraPage({
  era,
  lang,
}: {
  era: FutureSolutionEraSummary & { solutions: FutureSolutionRecord[] };
  lang: string;
}) {
  const pageInfo = getFutureSolutionsPageInfo(lang);
  const hero = pageInfo.era?.hero;
  const directorySection = pageInfo.era?.directory_section;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page future-solutions-page">
      <section className="cgd-directory-hero future-solutions-hero">
        <span className="platform-eyebrow">{hero?.eyebrow ?? ""}</span>
        <h1>{era.title}</h1>
        <p>
          {formatPageInfoTemplate(
            hero?.description_template ??
              "A focused view of {count} solution lenses from {timeframe}, connecting roadmap milestones to current problems, industry impact, and business opportunity.",
            { count: era.count, timeframe: era.timeframe },
          )}
        </p>
      </section>

      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{directorySection?.eyebrow ?? "Era Solutions"}</span>
          <h2>{directorySection?.title ?? "Problem-solving lenses"}</h2>
        </div>
        <div className="cgd-directory-grid future-solution-card-grid">
          {era.solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} lang={lang} />
          ))}
        </div>
      </section>
    </main>
  );
}

export function FutureSolutionDetailPage({
  lang,
  relatedSolutions,
  solution,
}: {
  lang: string;
  relatedSolutions: FutureSolutionRecord[];
  solution: FutureSolutionRecord;
}) {
  const pageInfo = getFutureSolutionsPageInfo(lang);
  const detail = pageInfo.detail;
  const breadcrumbs = detail?.breadcrumbs;
  const hero = detail?.hero;
  const lens = detail?.solution_lens;

  return (
    <main className="platform-page future-civilization-page cgd-page future-solutions-page future-solution-detail-page">
      <section className="cgd-hero future-solution-detail-hero">
        <nav className="cgd-breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/${lang}/future-civilization/`}>
            {breadcrumbs?.future_civilization ?? "Future Civilization"}
          </Link>
          <span>
            <span aria-hidden="true">/</span>
            <Link href={`/${lang}/future-solutions/`}>
              {breadcrumbs?.future_solutions ?? ""}
            </Link>
          </span>
          <span>
            <span aria-hidden="true">/</span>
            <Link href={`/${lang}/future-solutions/${solution.era_slug}/`}>{solution.era_slug}</Link>
          </span>
        </nav>
        <span className="platform-eyebrow">{hero?.eyebrow ?? ""}</span>
        <h1>{solution.title}</h1>
        <p>{solution.summary}</p>
        <div className="future-solution-hero-actions">
          <Link href={`/${lang}/future-solutions/${solution.era_slug}/`}>
            {hero?.view_era_solutions ?? "View era solutions"}
          </Link>
          <Link href={solution.canonical.roadmap_url}>
            {hero?.canonical_roadmap_item ?? "Canonical roadmap item"}
          </Link>
        </div>
      </section>

      <section className="platform-shell cgd-grid future-solution-lens-grid">
        <div className="future-solution-lens-grid__primary">
          {solution.roadmap_image ? (
            <div className="future-solution-lens-grid__media">
              <Image
                src={getPlatformImageSrc(solution.roadmap_image, "desktop")}
                alt={getPlatformImageAlt(solution.roadmap_image, "desktop")}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : null}
          <article className="cgd-panel cgd-panel--featured">
            <span>{lens?.problem_statement?.eyebrow ?? ""}</span>
            <h2>{lens?.problem_statement?.title ?? "What this solves"}</h2>
            <p>{solution.solution_lens.problem_statement}</p>
          </article>
        </div>

        <div className="future-solution-lens-grid__secondary">
          <article className="cgd-panel">
            <span>{lens?.future_solution?.eyebrow ?? ""}</span>
            <h2>{lens?.future_solution?.title ?? "How it works as a solution"}</h2>
            <p>{solution.solution_lens.future_solution}</p>
          </article>
          <article className="cgd-panel">
            <span>{lens?.why_it_matters?.eyebrow ?? "Why It Matters"}</span>
            <h2>{lens?.why_it_matters?.title ?? "Human value"}</h2>
            <p>{solution.solution_lens.why_it_matters}</p>
          </article>
        </div>
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{detail?.readiness?.eyebrow ?? "Readiness"}</span>
          <h2>{solution.readiness.label}</h2>
          <p>{solution.readiness.rationale}</p>
          <ul className="cgd-tag-list future-solution-mini-tags">
            <li>{solution.timeline.timeframe_label}</li>
            <li>
              {solution.timeline.expected_start_year}-{solution.timeline.expected_end_year}
            </li>
          </ul>
        </article>
        <article className="cgd-panel">
          <span>{detail?.human_impact?.eyebrow ?? "Human Impact"}</span>
          <h2>{detail?.human_impact?.title ?? "Individual, business, society"}</h2>
          <p>{solution.human_impact.individual}</p>
          <p>{solution.human_impact.business}</p>
          <p>{solution.human_impact.society}</p>
        </article>
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{detail?.current_problems?.eyebrow ?? "Current Problems Addressed"}</span>
          <h2>{detail?.current_problems?.title ?? "Problem links"}</h2>
          <ul className="future-solution-link-list">
            {solution.current_problems_addressed.map((problem) => (
              <li key={`${problem.node_id}-${problem.sub_node_id}-${problem.problem_id}`}>
                <span>{tagLabel(problem.node_id)} / {tagLabel(problem.sub_node_id)}</span>
                <strong>{tagLabel(problem.problem_id)}</strong>
              </li>
            ))}
          </ul>
        </article>
        <article className="cgd-panel">
          <span>{detail?.industries_impacted?.eyebrow ?? "Industries Impacted"}</span>
          <h2>{detail?.industries_impacted?.title ?? "Where it lands"}</h2>
          <ul className="future-solution-link-list">
            {solution.industries_impacted.map((industry) => (
              <li key={`${industry.node_id}-${industry.sub_node_id}`}>
                <span>{tagLabel(industry.node_id)}</span>
                <strong>{tagLabel(industry.sub_node_id)}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="platform-shell cgd-two-column">
        <article className="cgd-panel">
          <span>{detail?.business_opportunities?.eyebrow ?? ""}</span>
          <h2>{detail?.business_opportunities?.title ?? "Commercial paths"}</h2>
          <ul className="future-solution-link-list">
            {solution.business_opportunities.map((opportunity) => (
              <li key={opportunity.business_opportunity_id}>
                <span>{tagLabel(opportunity.node_id)} / {tagLabel(opportunity.sub_node_id)}</span>
                <strong>{tagLabel(opportunity.business_opportunity_id)}</strong>
              </li>
            ))}
          </ul>
        </article>
        <article className="cgd-panel">
          <span>{detail?.risks?.eyebrow ?? "Risks And Challenges"}</span>
          <h2>{detail?.risks?.title ?? "What must be managed"}</h2>
          <ul className="cgd-tag-list future-solution-risk-list">
            {solution.risks_and_challenges.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{detail?.related?.eyebrow ?? "Related Solution Lenses"}</span>
          <h2>{detail?.related?.title ?? "Continue through the graph"}</h2>
        </div>
        <div className="cgd-directory-grid future-solution-card-grid">
          {relatedSolutions.map((related) => (
            <SolutionCard key={related.id} solution={related} lang={lang} />
          ))}
        </div>
      </section>
    </main>
  );
}