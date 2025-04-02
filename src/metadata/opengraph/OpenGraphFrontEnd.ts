import {IOpenGraphFrontEnd} from "@/metadata/model/opengraph/IOpenGraphFrontEnd";
import {ImageVersion} from "@/metadata/ImageVersion";
import {Space} from "@/lib/Space";

export const OpenGraphFrontEnd: IOpenGraphFrontEnd = {
    main: {
        url: `${Space.public}/metadata/frontend-development-services.png` + ImageVersion,
        alt: `Front-End Development Banner`
    },
    angular: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/angular-development-service.png` + ImageVersion,
        alt: `Angular Development Banner`
    },
    css3: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/css3-development-service.png` + ImageVersion,
        alt: `CSS3 Development Banner`
    },
    html5: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/html5-development-service.png` + ImageVersion,
        alt: `HTML5 Development Banner`
    },
    javascript: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/javascript-development-service.png` + ImageVersion,
        alt: `CHORN JavaScript Development Banner`
    },
    nextjs: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/nextjs-development-service.png` + ImageVersion,
        alt: `Next.js Development Banner`
    },
    react: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/react-development-service.png` + ImageVersion,
        alt: `React Development Banner`
    },
    typescript: {
        url: `${Space.public}/metadata/technical-expertise/fullstack-development/typescript-development-service.png` + ImageVersion,
        alt: `CHORN TypeScript Development Banner`
    },
    vue: {
        url: `${Space.public}/metadata/technical-expertise/frontend-development/vue-development-service.png` + ImageVersion,
        alt: `Vue.js Development Banner`
    }
}