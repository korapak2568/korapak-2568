import {IImageDetail} from "@/data/image/model/IImageDetail";
import {IImageLink} from "@/data/image/model/IImageLink";

export interface IImage {
    logo: {
        circleLg: IImageDetail,
        circleMd: IImageDetail,
        circleSm: IImageDetail,
        business: IImageDetail,
        light: {
            rec: {
                sm: IImageDetail,
                lg: IImageDetail,
            }
        },
        darker: {
            rec: {
                sm: IImageDetail,
                lg: IImageDetail,
            }
        },
        gold: {
            rec: {
                sm: IImageDetail,
                lg: IImageDetail,
            }
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