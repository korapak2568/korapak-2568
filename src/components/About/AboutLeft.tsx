import React from "react";

export default function AboutLeft() {
    return (
        <div className="col-lg-4">
            <div
                className="about-image-warp about-image-custom"
                style={{backgroundImage: `url(/chorn-images/about/about-chorn.jpg)`}}
            />
            <div className="single-footer-widget about-linkedin-widget">
                <div className="social social-about">
                    <div className="linkedin-symbol">
                        <a href="https://www.linkedin.com/in/khachornchit"
                           className="linkedin"
                           target="_blank"
                           aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin hover-rotate"/>
                        </a>
                    </div>
                    <div className="linkedin-text">
                        <a href="https://www.linkedin.com/in/khachornchit/"
                           target="_blank"
                        >
                            www.linkedin.com/in/khachornchit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}