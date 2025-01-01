import Link from "next/link";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function Left() {
    const service = useSelector((state: RootState) => state.service.value);

    return (
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
    )
}