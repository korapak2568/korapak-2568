import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

function getFooterConnectHref(lang: string, item: IFooterDetail): string {
    if (item.link.startsWith("http")) {
        return item.link;
    }

    return '/' + lang + item.link;
}

export default function FooterConnect({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{footer.connect.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {footer.connect.items.map((item: IFooterDetail, index: number) => {
                        const isExternalLink = item.link.startsWith("http");

                        return (
                            <li key={item.label + '-' + index}>
                                <Link
                                    href={getFooterConnectHref(lang, item)}
                                    aria-label={item.ariaLabel}
                                    target={isExternalLink ? '_blank' : undefined}
                                    rel={isExternalLink ? 'noopener noreferrer' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
