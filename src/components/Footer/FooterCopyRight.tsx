import React from "react";
import Link from "next/link";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";

function findFooterPolicyLink(
    footer: IFooter,
    matchPath: string,
): IFooterDetail | undefined {
    const normalizedMatchPath = matchPath.replace(/\/$/, "");

    return footer.important.items.find((item) => {
        const normalizedLink = item.link.replace(/\/$/, "");
        return normalizedLink === normalizedMatchPath;
    });
}

function getLocalizedFooterHref(lang: string, link: string): string {
    if (link.startsWith("http")) {
        return link;
    }

    return '/' + lang + link;
}

export default function Information({lang, footer}: { lang: string, footer: IFooter }) {
    const year = new Date().getFullYear()
    const policyLinks = [
        findFooterPolicyLink(footer, "/terms-of-service/"),
        findFooterPolicyLink(footer, "/privacy-policy/"),
        findFooterPolicyLink(footer, "/workplace-policy/"),
    ].filter((item): item is IFooterDetail => item !== undefined);

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content copyright-area-content-x">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year} by <Link href={getLocalizedFooterHref(lang, footer.link)}>{footer.title}</Link>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                {policyLinks.map((item) => (
                                    <li key={item.link}>
                                        <Link href={getLocalizedFooterHref(lang, item.link)}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
