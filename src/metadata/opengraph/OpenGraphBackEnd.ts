import {IOpenGraphBackEnd} from "@/metadata/model/opengraph/IOpenGraphBackEnd";
import {TrackVersion} from "../version/MetadataVersion";
import {CDN_IMAGE} from "@/image/ImageUrl";

export const OpenGraphBackEnd: IOpenGraphBackEnd = {
    main: {
        url: CDN_IMAGE + "/metadata/fullstack/fullstack-development-services.png" + TrackVersion,
        alt: "CHORN's image of Back-End & API Development Banner"
    },
    dotnetcore: {
        url: CDN_IMAGE + "/metadata/fullstack/dotnet-core-development-service.png" + TrackVersion,
        alt: "CHORN's image of .NET Core C# Development Banner"
    },
    go: {
        url: CDN_IMAGE + "/metadata/fullstack/go-development-service.png" + TrackVersion,
        alt: "CHORN's image of Go Development Banner"
    },
    java: {
        url: CDN_IMAGE + "/metadata/fullstack/java-spring-boot-development-service.png" + TrackVersion,
        alt: "CHORN's image of Java Spring Boot Development Banner"
    },
    nodejs: {
        url: CDN_IMAGE + "/metadata/fullstack/nodejs-development-service.png" + TrackVersion,
        alt: "CHORN's image of Node.js Development Banner"
    },
    php: {
        url: CDN_IMAGE + "/metadata/fullstack/php-development-service.png" + TrackVersion,
        alt: "CHORN's image of PHP Development Banner"
    },
    python: {
        url: CDN_IMAGE + "/metadata/fullstack/python-development-service.png" + TrackVersion,
        alt: "CHORN's image of Python Development Banner"
    },
}