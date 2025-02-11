import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";

export const LogoSocial: React.FC = () => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
                <div className="logo logo-bg-custom">
                    <Link href="/">
                        <Image
                            src={Info.Images.logo.md.path}
                            alt={Info.Images.logo.md.title}
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>

                <p>{Info.Footer.description}</p>

                <ul className="social">
                    {Info.Footer.socialLinks.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className={item.iconClass}
                                target="_blank"
                                aria-label={item.ariaLabel}
                            >
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}