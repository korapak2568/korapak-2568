import React from "react";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";

export const MainShape: React.FC = () => {
    return (
        <div className="main-slider-shape">
            <div className="shape-2">
                <Image
                    src={ImageUrl.shape.main.shape2.path}
                    alt={ImageUrl.shape.main.shape2.title}
                    width={66}
                    height={62}
                />
            </div>
            <div className="shape-3">
                <Image
                    src={ImageUrl.shape.main.shape3.path}
                    alt={ImageUrl.shape.main.shape3.title}
                    width={117}
                    height={119}
                />
            </div>
        </div>
    )
}