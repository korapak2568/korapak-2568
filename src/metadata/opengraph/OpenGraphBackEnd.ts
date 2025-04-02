import {IOpenGraphBackEnd} from "@/metadata/model/opengraph/IOpenGraphBackEnd";
import {TrackVersion} from "../version/MetadataVersion";

export const OpenGraphBackEnd: IOpenGraphBackEnd = {
    main: {
        url: "https://chorn.in.th/images/metadata/fullstack-development-services.png" + TrackVersion,
        alt: "CHORN's image of Back-End & API Development Banner"
    },
    dotnetcore: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/dotnet-core-development-service.png" + TrackVersion,
        alt: "CHORN's image of .NET Core C# Development Banner"
    },
    go: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/go-development-service.png" + TrackVersion,
        alt: "CHORN's image of Go Development Banner"
    },
    java: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/java-spring-boot-development-service.png" + TrackVersion,
        alt: "CHORN's image of Java Spring Boot Development Banner"
    },
    nodejs: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/nodejs-development-service.png" + TrackVersion,
        alt: "CHORN's image of Node.js Development Banner"
    },
    php: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/php-development-service.png" + TrackVersion,
        alt: "CHORN's image of PHP Development Banner"
    },
    python: {
        url: "https://chorn.in.th/images/metadata/technical-expertise/fullstack-development/python-development-service.png" + TrackVersion,
        alt: "CHORN's image of Python Development Banner"
    },
}