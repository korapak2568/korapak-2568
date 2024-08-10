"use client";

import React from "react";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const ContactInfo: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-email-1"></i>
                                </div>

                                <h3>Email Here</h3>
                                <p>
                                    <a href="mailto:contact@chorn.in.th">contact@chorn.in.th</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-pin"></i>
                                </div>

                                <h3>Location Here</h3>
                                <p>
                                    <a
                                        href="https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu"
                                        target="_blank"
                                    >
                                        Chiang Mai, Thailand
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Image
                                        src={service.IMAGES.line.icon.path}
                                        alt={service.IMAGES.line.icon.title}
                                        width={40}
                                        height={40}
                                    />
                                </div>

                                <h3>LINE</h3>
                                <p>
                                    <a href="https://lin.ee/HzWJ2bJ" target={'_blank'}>
                                        Connect LINE
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
