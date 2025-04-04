import {IImageUnit} from "@/data/image/model/IImageUnit";
import {IImageLink} from "@/data/image/model/IImageLink";

export interface IImageUrl {
    devopsThumbnails: {
        appium: IImageUnit,
        docker: IImageUnit,
        github: IImageUnit,
        gitlab: IImageUnit,
        jenkins: IImageUnit,
        kube: IImageUnit,
        postman: IImageUnit,
        selenium: IImageUnit,
        soapui: IImageUnit,
    },
    fullstackThumbnails: {
        dotnetcore: IImageUnit,
        go: IImageUnit,
        java: IImageUnit,
        nodejs: IImageUnit,
        php: IImageUnit,
        python: IImageUnit,
    },
    frontendThumbnails: {
        angular: IImageUnit,
        css3: IImageUnit,
        html5: IImageUnit,
        nextjs: IImageUnit,
        react: IImageUnit,
        typescript: IImageUnit,
        vue: IImageUnit,
        javascript: IImageUnit,
    },
    ai: {
        fah: {
            main: IImageUnit,
            thumbnail: IImageUnit,
        },
        aom: {
            main: IImageUnit,
            thumbnail: IImageUnit,
        },
        ploy: {
            main: IImageUnit,
            thumbnail: IImageUnit,
        },
    },
    shape: {
        default: {
            shape1: IImageUnit,
            shape2: IImageUnit,
            shape3: IImageUnit,
            shape4: IImageUnit,
        },
        main: {
            shape1: IImageUnit,
            shape2: IImageUnit,
            shape3: IImageUnit,
            shape4: IImageUnit,
            shape5: IImageUnit,
        },
    },
    feature: {
        default: IImageUnit,
        suvarnabhumi: IImageUnit,
        cloudGuru: IImageUnit,
        morningSky: IImageUnit
    },
    gallery: {
        main: IImageUnit;
        slides: IImageUnit[],
    },
    about: IImageUnit,
    NotFound404: IImageUnit,
    whatsapp: {
        md: IImageUnit,
    },
    profile: {
        md: IImageUnit,
    },
    logo: {
        lg: IImageUnit,
        md: IImageUnit,
        sm: IImageUnit,
        business: IImageUnit,
        rec: {
            sm: IImageUnit,
            lg: IImageUnit,
        },
        line: {
            sm: IImageUnit,
        }
    },
    home: {
        main: IImageUnit,
        slides: IImageUnit[];
    },
    banner: {
        banner1: IImageUnit,
        mainBannerBg1: IImageUnit,
        mainBannerBg2: IImageUnit,
        mainBannerBg3: IImageUnit,
        mainBannerBg4: IImageUnit,
    },
    pageBanner: {
        cover1: IImageUnit,
    },
    line: {
        qrcode: IImageUnit,
        icon: IImageLink,
    },
    serviceDetails: {
        nextjs: IImageUnit,
        react: IImageUnit,
        angular: IImageUnit,
        vue: IImageUnit,
        html5: IImageUnit,
        css3: IImageUnit,
        nodejs: IImageUnit,
        typescript: IImageUnit,
        javascript: IImageUnit,
        dotnetcore: IImageUnit,
        java: IImageUnit,
        python: IImageUnit,
        go: IImageUnit,
        php: IImageUnit,
    },
    devopsTesting: {
        docker: IImageUnit,
        kubernetes: IImageUnit,
        github: IImageUnit,
        gitlab: IImageUnit,
        jenkins: IImageUnit,
        postman: IImageUnit,
        selenium: IImageUnit,
        soapui: IImageUnit,
        appium: IImageUnit,
    }
}