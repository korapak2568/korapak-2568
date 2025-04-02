import {IOpenGraphBackEnd} from "@/metadata/model/opengraph/IOpenGraphBackEnd";
import {ImageVersion} from "@/metadata/ImageVersion";
import {Space} from "@/lib/Space";

export const OpenGraphBackEnd: IOpenGraphBackEnd = {
    main: {
        url: `${Space.public}/metadata/fullstack-development-services.png` + ImageVersion,
        alt: `CHORN's image of Back-End & API Development Banner`
    },
    dotnetcore: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/dotnet-core-development-service.png` + ImageVersion,
        alt: `CHORN's image of .NET Core C# Development Banner`
    },
    go: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/go-development-service.png` + ImageVersion,
        alt: `CHORN's image of Go Development Banner`
    },
    java: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/java-spring-boot-development-service.png` + ImageVersion,
        alt: `CHORN's image of Java Spring Boot Development Banner`
    },
    nodejs: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/nodejs-development-service.png` + ImageVersion,
        alt: `CHORN's image of Node.js Development Banner`
    },
    php: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/php-development-service.png` + ImageVersion,
        alt: `CHORN's image of PHP Development Banner`
    },
    python: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/python-development-service.png` + ImageVersion,
        alt: `CHORN's image of Python Development Banner`
    },
}