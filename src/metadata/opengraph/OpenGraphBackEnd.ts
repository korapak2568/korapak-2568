import {IOpenGraphBackEnd} from "@/metadata/model/opengraph/IOpenGraphBackEnd";
import {TrackVersion} from "../version/MetadataVersion";

export const OpenGraphBackEnd: IOpenGraphBackEnd = {
    main: {
        url: "https://chorn.in.th/images/metadata/fullstack/fullstack-development-services.png" + TrackVersion,
        alt: "CHORN's image of Back-End & API Development Banner"
    },
    dotnetcore: {
        url: "https://chorn.in.th/images/metadata/fullstack/dotnet-core-development-service.png" + TrackVersion,
        alt: "CHORN's image of .NET Core C# Development Banner"
    },
    go: {
        url: "https://chorn.in.th/images/metadata/fullstack/go-development-service.png" + TrackVersion,
        alt: "CHORN's image of Go Development Banner"
    },
    java: {
        url: "https://chorn.in.th/images/metadata/fullstack/java-spring-boot-development-service.png" + TrackVersion,
        alt: "CHORN's image of Java Spring Boot Development Banner"
    },
    nodejs: {
        url: "https://chorn.in.th/images/metadata/fullstack/nodejs-development-service.png" + TrackVersion,
        alt: "CHORN's image of Node.js Development Banner"
    },
    php: {
        url: "https://chorn.in.th/images/metadata/fullstack/php-development-service.png" + TrackVersion,
        alt: "CHORN's image of PHP Development Banner"
    },
    python: {
        url: "https://chorn.in.th/images/metadata/fullstack/python-development-service.png" + TrackVersion,
        alt: "CHORN's image of Python Development Banner"
    },
}