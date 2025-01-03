import {IImage, IImageLink} from "@/data/model/image/IImage";

export interface IImageAll {
    logo: {
        circleLg: IImage,
        circleMd: IImage,
        circleSm: IImage,
        business: IImage,
        light: {
            rec: {
                sm: IImage,
                lg: IImage,
            }
        },
        darker: {
            rec: {
                sm: IImage,
                lg: IImage,
            }
        },
        gold: {
            rec: {
                sm: IImage,
                lg: IImage,
            }
        }
    },
    home: {
        mainBanner: IImage,
    },
    banner: {
        banner1: IImage,
    },
    pageBanner: {
        cover1: IImage,
    },
    line: {
        qrcode: IImage,
        icon: IImageLink,
    },
    serviceDetails: {
        nextjs: IImage,
        react: IImage,
        angular: IImage,
        vue: IImage,
        html5: IImage,
        css3: IImage,
        nodejs: IImage,
        typescript: IImage,
        dotnetcore: IImage,
        java: IImage,
        python: IImage,
        go: IImage,
        php: IImage,
    },
    devopsTesting: {
        docker: IImage,
        kubernetes: IImage,
        github: IImage,
        gitlab: IImage,
        jenkins: IImage,
        postman: IImage,
        selenium: IImage,
        soapui: IImage,
        appium: IImage,
    }
}