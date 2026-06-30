import {IMetaLinkBackend} from "@/metadata/metadataLink/model/IMetaLinkBackend";
import {MetadataImageVersion} from "../version/MetadataImageVersion";

export const MetaLinkBackend: IMetaLinkBackend = {
    main: {
        canonical: "/technical-expertise/full-stack-developer/",
        image: {
            url: "/images-opengraph/fullstack/fullstack-development-services.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Back-End & API Development Banner"
        }
    },
    go: {
        canonical: "/technical-expertise/full-stack-developer/go-developer/",
        image: {
            url: "/images-opengraph/fullstack/go-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Go Development Banner"
        }
    },
    java: {
        canonical: "/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        image: {
            url: "/images-opengraph/fullstack/java-spring-boot-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Java Spring Boot Development Banner"
        }
    },
    nodejs: {
        canonical: "/technical-expertise/full-stack-developer/nodejs-developer/",
        image: {
            url: "/images-opengraph/fullstack/nodejs-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Node.js Development Banner"
        }
    },
    php: {
        canonical: "/technical-expertise/full-stack-developer/php-developer/",
        image: {
            url: "/images-opengraph/fullstack/php-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of PHP Development Banner"
        }
    },
    python: {
        canonical: "/technical-expertise/full-stack-developer/python-developer/",
        image: {
            url: "/images-opengraph/fullstack/python-development-service.png" + MetadataImageVersion,
            alt: "Chorn Planet's image of Python Development Banner"
        }
    }
}