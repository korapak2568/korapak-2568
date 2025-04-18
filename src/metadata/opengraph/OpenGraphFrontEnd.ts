import {IOpenGraphFrontEnd} from "@/metadata/model/opengraph/IOpenGraphFrontEnd";
import {TrackVersion} from "../version/MetadataVersion";
import {CDN_IMAGE} from "@/image/ImageUrl";

export const OpenGraphFrontEnd: IOpenGraphFrontEnd = {
    main: {
        url: CDN_IMAGE + "/metadata/frontend/frontend-development-services.png" + TrackVersion,
        alt: "CHORN's image of Front-End Development Banner"
    },
    angular: {
        url: CDN_IMAGE + "/metadata/frontend/angular-development-service.png" + TrackVersion,
        alt: "CHORN's image of Angular Development Banner"
    },
    css3: {
        url: CDN_IMAGE + "/metadata/frontend/css3-development-service.png" + TrackVersion,
        alt: "CHORN's image of CSS3 Development Banner"
    },
    html5: {
        url: CDN_IMAGE + "/metadata/frontend/html5-development-service.png" + TrackVersion,
        alt: "CHORN's image of HTML5 Development Banner"
    },
    javascript: {
        url: CDN_IMAGE + "/metadata/frontend/javascript-development-service.png" + TrackVersion,
        alt: "CHORN's image of CHORN JavaScript Development Banner"
    },
    nextjs: {
        url: CDN_IMAGE + "/metadata/frontend/nextjs-development-service.png" + TrackVersion,
        alt: "CHORN's image of Next.js Development Banner"
    },
    react: {
        url: CDN_IMAGE + "/metadata/frontend/react-development-service.png" + TrackVersion,
        alt: "CHORN's image of React Development Banner"
    },
    typescript: {
        url: CDN_IMAGE + "/metadata/frontend/typescript-development-service.png" + TrackVersion,
        alt: "CHORN's image of CHORN TypeScript Development Banner"
    },
    vue: {
        url: CDN_IMAGE + "/metadata/frontend/vue-development-service.png" + TrackVersion,
        alt: "Vue.js Development Banner"
    }
}