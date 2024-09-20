"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";

const ServicesCardFrontEnd: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <p>
                                Take advantage of our full-stack development outsourcing services to build robust,
                                scalable, and secure web applications from scratch. Our developers excel in both
                                front-end and back-end technologies, delivering a comprehensive solution tailored to
                                your business needs. We have expertise in a variety of technology stacks, including
                                <strong>Node.js, .NET Core, Java Spring Boot, Python,
                                    Go, </strong> and <strong>PHP,</strong> ensuring we can meet any project
                                requirements, no matter how complex.
                            </p>
                            <p>
                                Whether you are launching a <strong>Proof of Concept (PoC)</strong> or looking to
                                develop
                                a full-scale <strong>Minimum Viable Product (MVP)</strong>, our full-stack developers
                                ensure seamless integration between the front end and back end for an optimal user
                                experience.
                            </p>
                            <div>
                                <h2>Our Full-Stack Development Services</h2>
                                <ul>
                                    <li>
                                        <strong>Front-End & Back-End Integration</strong>Create fully-functional web
                                        applications that are fast, secure, and easy to scale.
                                    </li>
                                    <li><strong>SEO & Performance Optimization</strong>SEO your website on Google with
                                        optimized code and performance.
                                    </li>
                                    <li><strong>Automation Testing</strong>Enhance reliability with thorough testing
                                        frameworks integrated into the development cycle.
                                    </li>
                                    <li><strong>Database Management</strong>Efficiently handle your data with MySQL,
                                        MongoDB, or PostgreSQL.
                                    </li>
                                    <li><strong>Cloud Services</strong>Deploy scalable applications using AWS, Azure, or
                                        Google Cloud.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Why Outsource to Us?</h2>
                                <p>
                                    We deliver flexible, end-to-end full-stack solutions tailored to your specific
                                    project goals. Our expert developers work with you through every stage of the
                                    development process, from <strong>PoC</strong> to <strong>MVP</strong> and full
                                    production, ensuring a seamless development journey with regular feedback and
                                    updates. Leverage our expertise in <strong>API integration,
                                    DevOps,</strong> and <strong>automation testing</strong> for rapid, efficient
                                    delivery.
                                </p>
                            </div>
                        </div>

                        {service.FULL_STACK_FRAMEWORK_INFO.additions.map((addition: IContentImage, index: number) => (
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

                <div className="default-shape">
                    <div className="shape1">
                        <Image
                            src="/images/default-shape/default-shape1.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="shape2">
                        <Image
                            src="/images/default-shape/default-shape2.png"
                            alt="image"
                            width={14}
                            height={16}
                        />
                    </div>
                    <div className="shape3">
                        <Image
                            src="/images/default-shape/default-shape3.png"
                            alt="image"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="shape4">
                        <Image
                            src="/images/default-shape/default-shape4.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardFrontEnd;
