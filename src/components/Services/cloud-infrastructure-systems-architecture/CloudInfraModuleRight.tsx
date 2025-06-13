import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const CloudInfraModuleRight: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <div className="cloud-infra-right">
            {InfoTranslation[lang].Cloud.stacks.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    alt={image.title}
                    width={100}
                    height={100}
                    quality={100}
                    priority={false}
                    loading={"lazy"}
                />
            ))}
        </div>
    )
}

export default CloudInfraModuleRight