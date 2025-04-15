import React from "react";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";

export const DefaultShape: React.FC = () => {
    return (
        <div className="default-shape">
            <div className="shape1 deep-screen-p10">
                <Image
                    src={ImageUrl.shape.default.shape1.path}
                    alt="image"
                    width={52}
                    height={52}
                />
            </div>
            <div className="shape2 deep-screen-p10">
                <Image
                    src={ImageUrl.shape.default.shape2.path}
                    alt="image"
                    width={14}
                    height={16}
                />
            </div>
            <div className="shape3 deep-screen-p10">
                <Image
                    src={ImageUrl.shape.default.shape3.path}
                    alt="image"
                    width={18}
                    height={18}
                />
            </div>
            <div className="shape4 deep-screen-p10">
                <Image
                    src={ImageUrl.shape.default.shape4.path}
                    alt="image"
                    width={52}
                    height={52}
                />
            </div>
        </div>
    )
}