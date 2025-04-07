import React from "react";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";

export const DefaultShape: React.FC = () => {
    return (
        <div className="default-shape">
            <div className="shape1">
                <Image
                    src={ImageUrl.shape.default.shape1.path}
                    alt="image"
                    width={52}
                    height={52}
                />
            </div>
            <div className="shape2">
                <Image
                    src={ImageUrl.shape.default.shape2.path}
                    alt="image"
                    width={14}
                    height={16}
                />
            </div>
            <div className="shape3">
                <Image
                    src={ImageUrl.shape.default.shape3.path}
                    alt="image"
                    width={18}
                    height={18}
                />
            </div>
            <div className="shape4">
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