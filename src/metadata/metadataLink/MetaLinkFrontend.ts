import {IMetaLinkFrontend} from "@/metadata/metadataLink/model/IMetaLinkFrontend";
import {MetadataImageVersion} from "@/metadata/version/MetadataImageVersion";

export const MetaLinkFrontend: IMetaLinkFrontend = {
    main: {
        canonical: "/technical-expertise/front-end-developer/",
        image: {
            url: "/images-opengraph/frontend/frontend-development-services.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Front-End Development Banner"
        }
    },
    nextjs: {
        canonical: "/technical-expertise/front-end-developer/nextjs-developer/",
        image: {
            url: "/images-opengraph/frontend/nextjs-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Next.js Development Banner"
        }
    },
    react: {
        canonical: "/technical-expertise/front-end-developer/react-developer/",
        image: {
            url: "/images-opengraph/frontend/react-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of React Development Banner"
        }
    },
    typescript: {
        canonical: "/technical-expertise/front-end-developer/typescript-developer/",
        image: {
            url: "/images-opengraph/frontend/typescript-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Chorn Planet TypeScript Development Banner"
        }
    },
}