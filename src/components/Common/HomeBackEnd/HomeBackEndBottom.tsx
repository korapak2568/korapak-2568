import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import React from "react";
import Link from "next/link";

export default function HomeBackEndBottom({lang}: { lang: string }) {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="digital-experience-content">
                    <ul className="feature-list">
                        {InfoTranslation[lang].FullStack.nodejs.features.map((item: any, index: any) => (
                            <li key={index} className="feature-item">
                                <div className="feature-icon-container">
                                    <div className="feature-icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <div className="feature-title">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <p className="feature-description">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="digital-experience-image home-backend-image">
                    {ImageUrl.gallery.slides.slice(0, 2).map((image: any, index: any) => (
                        <div key={index} className="home-backend-image">
                            <Link href={"/" + lang + "/gallery"}>
                                <Image
                                    src={image.image750}
                                    alt={image.title}
                                    width={750}
                                    height={500}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}