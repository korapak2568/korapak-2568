import {IMetaLinkBackend} from "@/metadata/metadataLink/model/IMetaLinkBackend";
import {MetadataImageVersion} from "../version/MetadataImageVersion";

export const MetaLinkBackend: IMetaLinkBackend = {
    main: {
        canonical: "/technical-expertise/full-stack-developer/",
        image: {
            url: "/images/metadata/fullstack/fullstack-development-services.png" + MetadataImageVersion,
            alt: "CHORN's image of Back-End & API Development Banner"
        }
    },
    dotnetcore: {
        canonical: "/technical-expertise/full-stack-developer/dotnetcore-developer/",
        image: {
            url: "/images/metadata/fullstack/dotnet-core-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of .NET Core C# Development Banner"
        }
    },
    go: {
        canonical: "/technical-expertise/full-stack-developer/go-developer/",
        image: {
            url: "/images/metadata/fullstack/go-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of Go Development Banner"
        }
    },
    java: {
        canonical: "/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        image: {
            url: "/images/metadata/fullstack/java-spring-boot-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of Java Spring Boot Development Banner"
        }
    },
    nodejs: {
        canonical: "/technical-expertise/full-stack-developer/nodejs-developer/",
        image: {
            url: "/images/metadata/fullstack/nodejs-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of Node.js Development Banner"
        }
    },
    php: {
        canonical: "/technical-expertise/full-stack-developer/php-developer/",
        image: {
            url: "/images/metadata/fullstack/php-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of PHP Development Banner"
        }
    },
    python: {
        canonical: "/technical-expertise/full-stack-developer/python-developer/",
        image: {
            url: "/images/metadata/fullstack/python-development-service.png" + MetadataImageVersion,
            alt: "CHORN's image of Python Development Banner"
        }
    }
}