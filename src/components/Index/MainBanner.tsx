// src/components/Index/MainBanner.tsx

"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Link from "next/link";

const MainBanner: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item item-four">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content pr-15">
                                            <h1
                                                data-aos="fade-up"
                                                data-aos-duration="800"
                                                data-aos-delay="100"
                                                data-aos-once="true"
                                                className="mobile-optimized-heading"
                                            >
                                                {service.CHORN_SERVICE_INFO.title}
                                            </h1>

                                            <p
                                                data-aos="fade-up"
                                                data-aos-duration="800"
                                                data-aos-delay="200"
                                                data-aos-once="true"
                                            >
                                                {service.CHORN_SERVICE_INFO.span}
                                            </p>

                                            <div className="option-item addition-pt-20">
                                                <Link href="/contact-chorn" className="default-btn">
                                                    Contact CHORN
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div
                                            className="main-banner-image pl-15"
                                            data-aos="fade-up"
                                            data-aos-duration="0"
                                            data-aos-delay="0"
                                            data-aos-once="true"
                                        >
                                            {isMobile ?
                                                (
                                                    <Image
                                                        src="/chorn-images/services/services-11-sm.webp"
                                                        alt="image"
                                                        width={400}
                                                        height={300}
                                                        sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 650px"
                                                        priority={true}
                                                    />
                                                ) :
                                                (
                                                    <Image
                                                        src="/chorn-images/services/services-11.webp"
                                                        alt="image"
                                                        width={650}
                                                        height={500}
                                                        sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 650px"
                                                        priority={true}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBanner;
