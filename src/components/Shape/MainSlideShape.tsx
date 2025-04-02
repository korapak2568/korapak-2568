import React from "react";
import Image from "next/image";
import {ImageUrl} from "@/data/image/ImageUrl";

export const MainSlideShape: React.FC = () => {
    return (
        <div className="main-slider-shape">
            <div className="shape-1">
                <Image
                    src={ImageUrl.mainSlide.shape1.path}
                    alt={ImageUrl.mainSlide.shape1.title}
                    width={399}
                    height={438}
                />
            </div>
            <div className="shape-2">
                <Image
                    src={ImageUrl.mainSlide.shape2.path}
                    alt={ImageUrl.mainSlide.shape2.title}
                    width={66}
                    height={62}
                />
            </div>
            <div className="shape-3">
                <Image
                    src={ImageUrl.mainSlide.shape3.path}
                    alt={ImageUrl.mainSlide.shape3.title}
                    width={117}
                    height={119}
                />
            </div>
            <div className="shape-4">
                <Image
                    src={ImageUrl.mainSlide.shape4.path}
                    alt={ImageUrl.mainSlide.shape4.title}
                    width={164}
                    height={164}
                />
            </div>
            <div className="shape-5">
                <Image
                    src={ImageUrl.mainSlide.shape5.path}
                    alt={ImageUrl.mainSlide.shape5.title}
                    width={438}
                    height={399}
                />
            </div>
        </div>
    )
}