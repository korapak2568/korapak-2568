import Link from "next/link";
import { getFutureSolutionRelations } from "@/lib/cgd/loader";

export default async function FutureSolutionCgdRelations({
  eraId,
  eraItemId,
  lang,
}: {
  eraId: string;
  eraItemId: string;
  lang: string;
}) {
  const relations = await getFutureSolutionRelations(eraId, eraItemId);

  if (
    relations.solvedProblems.length === 0 &&
    relations.businessOpportunities.length === 0 &&
    relations.relatedSubNodes.length === 0
  ) {
    return null;
  }

  return (
    <section className="platform-shell cgd-section future-civilization-cgd-relations">
      <div className="platform-section__header">
        <span>Civilization Graph</span>
        <h2>
          Problems, industries, and opportunities connected to this roadmap item
        </h2>
      </div>

      <div className="cgd-two-column cgd-two-column--embedded">
        <article className="cgd-panel">
          <span>Problems Solved</span>
          <h3>Current challenges</h3>
          <div className="cgd-link-list">
            {relations.solvedProblems.length > 0 ? (
              relations.solvedProblems.map(
                ({ node, problem, subNode, url }) => (
                  <Link
                    key={`${node.id}-${subNode.id}-${problem.id}`}
                    href={`/${lang}${url}`}
                  >
                    <span>{problem.name}</span>
                    <small>
                      {node.name} / {subNode.name}
                    </small>
                  </Link>
                ),
              )
            ) : (
              <p className="cgd-muted">
                Problem links will expand as the graph grows.
              </p>
            )}
          </div>
        </article>

        <article className="cgd-panel">
          <span>Business Opportunities</span>
          <h3>Commercial paths</h3>
          <div className="cgd-link-list">
            {relations.businessOpportunities.length > 0 ? (
              relations.businessOpportunities.map(
                ({ node, opportunity, url }) => (
                  <Link
                    key={`${node.id}-${opportunity.id}`}
                    href={`/${lang}${url}`}
                  >
                    <span>{opportunity.name}</span>
                    <small>{node.name}</small>
                  </Link>
                ),
              )
            ) : (
              <p className="cgd-muted">
                Business opportunity links will expand as the graph grows.
              </p>
            )}
          </div>
        </article>
      </div>

      <div className="cgd-panel cgd-panel--compact">
        <span>Related Sub Nodes</span>
        <ul className="cgd-tag-list">
          {relations.relatedSubNodes.map((subNode) => (
            <li key={`${subNode.node_id}-${subNode.id}`}>{subNode.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
