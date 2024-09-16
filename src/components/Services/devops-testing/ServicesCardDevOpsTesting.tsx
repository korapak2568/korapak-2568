"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";

const ServicesCardDevOpsTesting: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>

                            <p>
                                Streamline your software development lifecycle with our <strong>DevOps and testing
                                services.</strong> Our team of DevOps engineers helps automate and optimize your
                                infrastructure to deliver faster, more reliable software. Whether you’re
                                adopting <strong>Docker, Kubernetes,</strong> or utilizing <strong>GitLab
                                CI/CD,</strong> we ensure your deployment processes are automated and
                                secure.
                            </p>

                            <p>
                                Our testing services ensure that your application is bug-free, scalable, and ready to
                                launch. From <strong>unit testing </strong> to <strong>integration testing,</strong> our
                                comprehensive testing strategies include tools like <strong>Postman,</strong>
                                <strong> Selenium</strong>, and <strong>Appium</strong> for API and UI automation.
                            </p>

                            <div>
                                <h2>Our DevOps & Testing Solutions</h2>
                                <ul>
                                    <li>
                                        <strong>Continuous Integration & Continuous Deployment (CI/CD)</strong>Automate
                                        your pipeline with <strong></strong> GitLab, <strong></strong>Jenkins, or
                                        <strong></strong>GitHub Actions to accelerate development
                                        cycles.
                                    </li>
                                    <li><strong>Containerization & Orchestration</strong>Leverage <strong></strong>Docker
                                        and <strong></strong>Kubernetes
                                        for scalable, containerized applications.
                                    </li>
                                    <li><strong>Automation Testing</strong>Utilize frameworks like Selenium, Postman,
                                        Appium, and SOAPUI for efficient, automated test execution.
                                    </li>
                                    <li><strong>Monitoring & Logging</strong>Gain real-time insights into performance
                                        with monitoring tools that catch issues before they affect your users.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Why Choose Us for DevOps and Testing?</h2>
                                <p>
                                    We ensure your software is not only built efficiently but also deployed, tested, and
                                    monitored with precision. Our DevOps team works closely with developers to automate
                                    infrastructure management, while our testing team integrates <strong>automated
                                    tests</strong> into every stage of development. From <strong>load
                                    testing</strong> to <strong>API validation</strong>, we provide end-to-end quality
                                    assurance for high-performance, secure, and reliable software.
                                </p>
                            </div>
                        </div>

                        {service.DEVOPS_TESTING_INFO.additions.map((addition: IContentImage, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-services">
                                    <div className="image">
                                        <Link href={addition.link}>
                                            <Image
                                                className="hover-rotate"
                                                src={addition.image}
                                                alt="image"
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

export default ServicesCardDevOpsTesting;
