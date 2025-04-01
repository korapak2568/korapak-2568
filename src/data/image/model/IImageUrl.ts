import {IImageUnit} from "@/data/image/model/IImageUnit";
import {IImageLink} from "@/data/image/model/IImageLink";

export interface IImageUrl {
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