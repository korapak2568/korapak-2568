"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="footer-area pt-100 pb-70 addition-pb-0">
                <div className="container">
                    <div className="row">
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

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{Info.Footer.importantTitle}</h3>
                                <ul className="quick-links">
                                    {Info.Footer.importantLinks
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

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{Info.Footer.infoTitle}</h3>

                                <ul className="footer-contact-info">
                                    {Info.Footer.infoLinks.map((item: IFooterDetail, index: number) => (
                                        <li key={index}>
                                            <i className={item.icon}></i>
                                            <span>{item.label}</span>
                                            <a
                                                href="https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu"
                                                target="_blank"
                                            >
                                                {item.link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className={'footer-line-information'}>
                                    <a href={Info.Contact.line.link} target={'_blank'}>
                                        <Image
                                            src={Info.Contact.line.iconImageLink}
                                            alt="เพิ่มเพื่อน"
                                            width={120}
                                            height={36}
                                        />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy; {year}. All Rights Reserved by{" "}
                                    <a href={Info.Footer.link} target="_blank">
                                        {Info.Footer.title}
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href={Info.Footer.termOfService.link}>
                                            {Info.Footer.termOfService.label}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={Info.Footer.privacyPolicy.link}>
                                            {Info.Footer.privacyPolicy.label}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={Info.Footer.workplacePolicy.link}>
                                            {Info.Footer.workplacePolicy.label}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
