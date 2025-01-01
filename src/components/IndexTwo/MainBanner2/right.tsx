import Image from "next/image";
import React from "react";

export default function Right() {
    return (
        <div className="col-lg-6">
            <div className="main-banner-image">
                <Image
                    src="/images/ai/01-fah/nong-fah-0003.jpg"
                    alt="image"
                    width={1240}
                    height={935}
                />
            </div>
        </div>
    )
}