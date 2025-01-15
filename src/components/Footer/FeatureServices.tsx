import React from "react";
import {Info} from "@/data/info/Info";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import Link from "next/link";

export const FeatureServices: React.FC = () => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
                <h3>{Info.Footer.featureTitle}</h3>
                <ul className="quick-links">
                    {Info.Footer.featuredLinks
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .map((item: IFooterDetail, index: number) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}