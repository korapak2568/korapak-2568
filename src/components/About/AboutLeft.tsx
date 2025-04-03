import React from "react";
import {ImageUrl} from "@/data/image/ImageUrl";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Image from "next/image";
import {Contact2025} from "@/data/contact/Contact2025";

export default function AboutLeft() {
    return (
        <div className="col-lg-4">
            <div
                className="about-image-warp about-image-custom"
                style={{backgroundImage: `url(${ImageUrl.about.path})`}}
            />
            <div className="single-footer-widget about-linkedin-widget">
                <div className="social social-about">
                    <div className="linkedin-symbol">
                        <a href="https://www.linkedin.com/company/chorn/"
                           className="linkedin"
                           target="_blank"
                           aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin hover-rotate"/>
                        </a>
                    </div>
                    <div className="linkedin-text">
                        <a href="https://www.linkedin.com/company/chorn/"
                           target="_blank"
                        >
                            linkedin.com/chorn
                        </a>
                    </div>
                </div>
                <div>
                    <a href={Contact2025.line.link}
                       target={'_blank'}>
                        <Image
                            src={Contact2025.line.button}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={36}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}