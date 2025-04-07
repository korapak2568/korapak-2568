import React from "react";
import {ImageUrl} from "@/image/ImageUrl";
import Image from "next/image";

const FullStackModuleRight: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <div className="col-lg-6 frontend-images-side-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ImageUrl.backend.side.slice(0, 4).map((image, index) => (
                    <Image
                        key={index}
                        src={image.image1200}
                        alt={image.title}
                        width={1200}
                        height={900}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw), 400px)"
                        quality={80}
                        priority={false}
                        loading={"lazy"}
                        className="frontend-images-side-unit"
                    />
                ))}
            </div>
        </div>
    )
}

export default FullStackModuleRight