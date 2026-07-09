import Link from "next/link";
import {
  type CgdBusinessDirectoryNode,
  type CgdIndustryDirectoryNode,
} from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";

type DirectoryPageInfo = {
  index?: {
    directory_section?: {
      eyebrow?: string;
      title?: string;
      card_description_template?: string;
      card_problem_count_template?: string;
    };
  };
  node?: {
    hero?: {
      eyebrow?: string;
      description_template?: string;
    };
    stats?: Record<string, string>;
    problem_section?: {
      eyebrow?: string;
      title?: string;
    };
    opportunity_section?: {
      eyebrow?: string;
      title?: string;
    };
    sub_nodes_section?: {
      eyebrow?: string;
      title?: string;
    };
  };
};

export function CgdDirectoryHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: number | string }>;
}) {
  return (
    <section className="cgd-directory-hero">
      <span className="platform-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export async function IndustryDirectoryGrid({
  items,
  lang,
}: {
  items: CgdIndustryDirectoryNode[];
  lang: string;
}) {
  const pageInfo = await getLayerPageInfo<DirectoryPageInfo>("industries", lang);
  const section = pageInfo.index?.directory_section;

  return (
    <section className="platform-shell cgd-directory-section">
      <div className="platform-section__header">
        <span>{section?.eyebrow ?? "Industry Map"}</span>
        <h2>{section?.title ?? ""}</h2>
      </div>
      <div className="cgd-directory-grid">
        {items.map((item) => (
          <article key={item.node.id} className="cgd-directory-card cgd-directory-card--industry">
            <Link href={`/${lang}${item.url}`}>
              <span>
                {formatPageInfoTemplate(
                  section?.card_problem_count_template ?? "{count} linked problem pages",
                  { count: item.linkedProblemCount },
                )}
              </span>
              <h3>{item.node.name}</h3>
              <p>
                {formatPageInfoTemplate(
                  section?.card_description_template ??
                    "{subNodeCount} sub-nodes and {problemCount} current challenges connected to the Civilization Graph.",
                  {
                    problemCount: item.totalProblemCount,
                    subNodeCount: item.subNodeCount,
                  },
                )}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function BusinessDirectoryGrid({
  items,
  lang,
}: {
  items: CgdBusinessDirectoryNode[];
  lang: string;
}) {
  const pageInfo = await getLayerPageInfo<DirectoryPageInfo>("business_opportunities", lang);
  const section = pageInfo.index?.directory_section;

  return (
    <section className="platform-shell cgd-directory-section">
      <div className="platform-section__header">
        <span>{section?.eyebrow ?? "Opportunity Map"}</span>
        <h2>{section?.title ?? ""}</h2>
      </div>
      <div className="cgd-directory-grid">
        {items.map((item) => (
          <article
            key={item.node.id}
            className="cgd-directory-card cgd-directory-card--business"
          >
            <Link href={`/${lang}${item.url}`}>
              <h3>{item.node.name}</h3>
              <p>
                {formatPageInfoTemplate(
                  section?.card_description_template ??
                    "{opportunityCount} commercial ideas across {subNodeCount} sub-nodes and {eraCount} roadmap eras.",
                  {
                    eraCount: item.eraCount,
                    opportunityCount: item.opportunityCount,
                    subNodeCount: item.subNodeCount,
                  },
                )}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function IndustryNodeDirectory({
  item,
  lang,
}: {
  item: CgdIndustryDirectoryNode;
  lang: string;
}) {
  const pageInfo = await getLayerPageInfo<DirectoryPageInfo>("industries", lang);
  const nodeInfo = pageInfo.node;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page">
      <CgdDirectoryHero
        eyebrow={nodeInfo?.hero?.eyebrow ?? "Industry Node"}
        title={item.node.name}
        description={formatPageInfoTemplate(
          nodeInfo?.hero?.description_template ??
            "Explore {nodeName} through current challenges, sub-nodes, and future roadmap solution links generated from the Civilization Graph.",
          { nodeName: item.node.name },
        )}
        stats={[
          { label: nodeInfo?.stats?.sub_nodes ?? "Sub-nodes", value: item.subNodeCount },
          { label: nodeInfo?.stats?.linked_pages ?? "Linked pages", value: item.linkedProblemCount },
          { label: nodeInfo?.stats?.problem_catalog ?? "Problem catalog", value: item.totalProblemCount },
        ]}
      />
      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{nodeInfo?.problem_section?.eyebrow ?? "Current Problems"}</span>
          <h2>{nodeInfo?.problem_section?.title ?? ""}</h2>
        </div>
        <div className="cgd-directory-list">
          {item.featuredProblems.map(({ problem, subNode, url }) => (
            <Link key={`${subNode.id}-${problem.id}`} href={`/${lang}${url}`}>
              <span>{subNode.name}</span>
              <strong>{problem.name}</strong>
            </Link>
          ))}
        </div>
      </section>
      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{nodeInfo?.sub_nodes_section?.eyebrow ?? "Sub Nodes"}</span>
          <h2>{nodeInfo?.sub_nodes_section?.title ?? "Operational areas"}</h2>
        </div>
        <ul className="cgd-tag-list cgd-tag-list--directory">
          {item.node.sub_nodes.map((subNode) => (
            <li key={subNode.id}>{subNode.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export async function BusinessNodeDirectory({
  item,
  lang,
}: {
  item: CgdBusinessDirectoryNode;
  lang: string;
}) {
  const pageInfo = await getLayerPageInfo<DirectoryPageInfo>("business_opportunities", lang);
  const nodeInfo = pageInfo.node;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page">
      <CgdDirectoryHero
        eyebrow={nodeInfo?.hero?.eyebrow ?? "Business Node"}
        title={item.node.name}
        description={formatPageInfoTemplate(
          nodeInfo?.hero?.description_template ??
            "Explore business opportunities in {nodeName}, grouped by sub-node and connected roadmap era.",
          { nodeName: item.node.name },
        )}
        stats={[
          { label: nodeInfo?.stats?.opportunities ?? "Opportunities", value: item.opportunityCount },
          { label: nodeInfo?.stats?.sub_nodes ?? "Sub-nodes", value: item.subNodeCount },
          { label: nodeInfo?.stats?.roadmap_eras ?? "Roadmap eras", value: item.eraCount },
        ]}
      />
      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{nodeInfo?.opportunity_section?.eyebrow ?? ""}</span>
          <h2>{nodeInfo?.opportunity_section?.title ?? ""}</h2>
        </div>
        <div className="cgd-directory-list cgd-directory-list--wide">
          {item.featuredOpportunities.map((opportunity) => (
            <Link key={opportunity.id} href={`/${lang}${opportunity.url}`}>
              <span>{opportunity.era_title}</span>
              <strong>{opportunity.name}</strong>
            </Link>
          ))}
        </div>
      </section>
      <section className="platform-shell cgd-directory-section">
        <div className="platform-section__header">
          <span>{nodeInfo?.sub_nodes_section?.eyebrow ?? "Sub Nodes"}</span>
          <h2>{nodeInfo?.sub_nodes_section?.title ?? "Opportunity areas"}</h2>
        </div>
        <ul className="cgd-tag-list cgd-tag-list--directory">
          {item.node.sub_nodes.map((subNode) => (
            <li key={subNode.id}>{subNode.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}