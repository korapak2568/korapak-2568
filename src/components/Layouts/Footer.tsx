"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ILink} from "@/data/model/common/ILink";
import {IMAGES} from "@/data/IMAGES";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="footer-area pt-100 pb-70 addition-pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <Image
                                            src={IMAGES.logo.circleMd.path}
                                            alt={IMAGES.logo.circleMd.title}
                                            width={100}
                                            height={100}
                                        />
                                    </Link>
                                </div>

                                <p>{service.FOOTER_INFO.description}</p>

                                <ul className="social">
                                    {service.FOOTER_INFO.socialLinks.map((item: ILink, index: number) => (
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
                                            <strong>X</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            href={service.IMAGES.line.icon.link}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <Image
                                                className="addition-footer-line hover-rotate"
                                                src={service.IMAGES.line.icon.path}
                                                alt={service.IMAGES.line.icon.title}
                                                width={40}
                                                height={40}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{service.FOOTER_INFO.importantTitle}</h3>
                                <ul className="quick-links">
                                    {service.FOOTER_INFO.importantLinks
                                        .filter((item: ILink) => item.link !== undefined)
                                        .map((item: ILink, index: number) => (
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
                                <h3>{service.FOOTER_INFO.featureTitle}</h3>
                                <ul className="quick-links">
                                    {service.FOOTER_INFO.featuredLinks
                                        .filter((item: ILink) => item.link !== undefined)
                                        .map((item: ILink, index: number) => (
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
                                <h3>{service.FOOTER_INFO.infoTitle}</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call hover-rotate"></i>
                                        <span>{service.FOOTER_INFO.infoLinks[0].link}</span>
                                        <p>Mon-Fri: 08:30 - 17:30</p>
                                    </li>

                                    <li>
                                        <i className="flaticon-email-1 hover-rotate"></i>
                                        <span>{service.FOOTER_INFO.infoLinks[1].label}</span>
                                        <p>{service.FOOTER_INFO.infoLinks[1].link}</p>
                                    </li>

                                    <li>
                                        <i className="flaticon-pin hover-rotate"></i>
                                        <span>{service.FOOTER_INFO.infoLinks[2].label}</span>
                                        <a
                                            href="https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu"
                                            target="_blank"
                                        >
                                            {service.FOOTER_INFO.infoLinks[2].link}
                                        </a>
                                    </li>
                                </ul>
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
                                    Copyright &copy; {currentYear} {service.FOOTER_INFO.title}.
                                    All Rights Reserved
                                    by{" "}
                                    <a href={service.FOOTER_INFO.link} target="_blank">
                                        {service.FOOTER_INFO.title}
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href={service.FOOTER_INFO.termOfService.link}>
                                            {service.FOOTER_INFO.termOfService.label}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={service.FOOTER_INFO.privacyPolicy.link}>
                                            {service.FOOTER_INFO.privacyPolicy.label}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={service.FOOTER_INFO.workplacePolicy.link}>
                                            {service.FOOTER_INFO.workplacePolicy.label}
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
