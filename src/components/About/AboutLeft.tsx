import React from "react";
import Image from "next/image";
import {Contact2025} from "@/data/contact/Contact2025";
import {FaMailBulk} from "react-icons/fa";

export default function AboutLeft() {
    return (
        <div className="col-lg-4">
            <div className="about-image-warp about-image-custom"/>
            <div className="x-bar-animation"/>

            <div className="single-footer-widget about-bottom-image">
                <div className="social left">
                    <div className="left-row">
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
                    <div className="left-row">
                        <div className="symbol">
                            <i className="bx bx-mail-send"/>
                        </div>
                        <p>
                            contact@chorn.in.th
                        </p>
                    </div>
                </div>
                <div className="right">
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