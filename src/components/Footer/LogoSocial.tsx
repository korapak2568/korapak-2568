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
                    <Link href="/public">
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
                    <li>
                        <a
                            href="https://x.com/chorndigital"
                            className={"x-com hover-rotate"}
                            target="_blank"
                        >
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="4" fill=""></rect>
                                <path
                                    d="M19.9222 4.66675H23.0741L16.1883 12.5742L24.2888 23.3334H17.9457L12.9779 16.8085L7.2928 23.3334H4.13916L11.504 14.8763L3.7334 4.66675H10.237L14.7275 10.6315L19.9222 4.66675ZM18.8157 21.4381H20.5627L9.28848 6.46302H7.41409L18.8157 21.4381Z"
                                    fill="white"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}