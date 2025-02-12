import {IImageDetail} from "@/data/image/model/IImageDetail";
import {IImageLink} from "@/data/image/model/IImageLink";

export interface IImage {
    whatsapp: {
        md: IImageDetail,
    },
    profile: {
        md: IImageDetail,
    },
    logo: {
        lg: IImageDetail,
        md: IImageDetail,
        sm: IImageDetail,
        business: IImageDetail,
        rec: {
            sm: IImageDetail,
            lg: IImageDetail,
        },
        line: {
            sm: IImageDetail,
        }
    },
    home: {
        mainBanner: IImageDetail,
    },
    banner: {
        banner1: IImageDetail,
    },
    pageBanner: {
        cover1: IImageDetail,
    },
    line: {
        qrcode: IImageDetail,
        icon: IImageLink,
    },
    serviceDetails: {
        nextjs: IImageDetail,
        react: IImageDetail,
        angular: IImageDetail,
        vue: IImageDetail,
        html5: IImageDetail,
        css3: IImageDetail,
        nodejs: IImageDetail,
        typescript: IImageDetail,
        javascript: IImageDetail,
        dotnetcore: IImageDetail,
        java: IImageDetail,
        python: IImageDetail,
        go: IImageDetail,
        php: IImageDetail,
    },
    devopsTesting: {
        docker: IImageDetail,
        kubernetes: IImageDetail,
        github: IImageDetail,
        gitlab: IImageDetail,
        jenkins: IImageDetail,
        postman: IImageDetail,
        selenium: IImageDetail,
        soapui: IImageDetail,
        appium: IImageDetail,
    }
}