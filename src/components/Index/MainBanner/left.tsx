import Link from "next/link";
import React from "react";
import {Info} from "@/data/info/Info";

export default function Left() {

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
                    {Info.Service.title}
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    {Info.Service.span}
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