"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";
import {Info} from "@/data/info/Info";

const ServicesCardFrontEnd: React.FC = () => {

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <p>
                                Looking for a highly skilled front-end developer to bring your web application vision to
                                life? Our front-end development outsourcing services offer expertise in crafting
                                user-friendly, visually appealing, and responsive websites. CHORN specializes in
                                frameworks
                                like <strong>Next.js, React, Angular, Vue.js, </strong> as well as the essential web
                                technologies, <strong>HTML5 </strong>
                                and <strong>CSS3</strong>.
                            </p>
                            <p>
                                Whether you are aiming for an SEO-optimized, high-performance single-page application
                                (SPA) or a complex, multi-page web platform, our developers ensure your project is
                                delivered efficiently and on time. From concept to deployment, CHORN helps you create
                                engaging digital experiences that captivate your audience.
                            </p>
                            <div>
                                <h2>Our Services</h2>
                                <ul>
                                    <li>
                                        <strong>Front-End Development</strong>Leverage modern frameworks
                                        like <strong>Next.js</strong>
                                        and <strong>React</strong> for dynamic web apps.
                                    </li>
                                    <li><strong>SEO Optimization</strong>Ensure your website on Google with
                                        optimized code and performance.
                                    </li>
                                    <li><strong>Proof of Concept (PoC)</strong>Validate your idea with a quick PoC.
                                    </li>
                                    <li><strong>Minimum Viable Product (MVP)</strong>Build a scalable MVP to attract
                                        early users and investors.
                                    </li>
                                    <li><strong>UI/UX Design</strong>Create beautiful, user-centric interfaces that
                                        improve engagement and user retention.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Why Choose CHORN?</h2>
                                <p>
                                    With years of experience and a proven track record of delivering high-quality
                                    front-end solutions, our developers ensure your site is not only aesthetically
                                    pleasing but also optimized for <strong>speed, SEO,</strong> and <strong>cross-platform
                                    compatibility</strong>. Hire
                                    our front-end developers to take your project to the next level and guarantee a
                                    fast, secure, and responsive user experience.
                                </p>
                            </div>
                        </div>

                        {Info.FrontEnd.additions.map((addition: IContentImage, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-services">
                                    <div className="image">
                                        <Link href={addition.link}>
                                            <Image
                                                className="hover-rotate"
                                                src={addition.image}
                                                alt={addition.alt}
                                                width={130}
                                                height={130}
                                            />
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link href={addition.link}>{addition.title}</Link>
                                    </h3>
                                    <p>{truncateText(addition.description)}</p>

                                    <Link href={addition.link} className="services-btn">
                                        {addition.readMore} <i className="bx bx-chevrons-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardFrontEnd;
