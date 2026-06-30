import React from "react";
import Image from "next/image";
import type { IFullStack } from "@/lib/model/IFullStack";

const FullStackModuleRight: React.FC<{ lang: string; fullStack: IFullStack }> = ({fullStack}) => {
    return (
        <div className="col-lg-6 frontend-images-side-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fullStack.sideImages.slice(0, 4).map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
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