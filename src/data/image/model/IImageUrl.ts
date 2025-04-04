import {IImageUnit} from "@/data/image/model/IImageUnit";
import {IImageLink} from "@/data/image/model/IImageLink";

export interface IImageUrl {
    devops: {
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
    fullstack: {
        dotnetcore: IImageUnit,
        go: IImageUnit,
        java: IImageUnit,
        nodejs: IImageUnit,
        php: IImageUnit,
        python: IImageUnit,
    },
    frontend: {
        angular: IImageUnit,
        css3: IImageUnit,
        html5: IImageUnit,
        nextjs: IImageUnit,
        react: IImageUnit,
        typescript: IImageUnit,
        vue: IImageUnit,
        javascript: IImageUnit,
    },
    slide: {
        homes: IImageUnit[];
        globals: IImageUnit[];
        global: IImageUnit,
    },
    ai: {
        defaultShape1: IImageUnit,
        defaultShape2: IImageUnit,
        defaultShape3: IImageUnit,
        defaultShape4: IImageUnit,
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
        mainBanner: IImageUnit,
    },
    banner: {
        banner1: IImageUnit,
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