import {IImageUnit} from "@/image/model/IImageUnit";
import {IImageLink} from "@/image/model/IImageLink";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export interface IImageUrl {
    ai: {
        fah: IImageResponsiveUnit,
        aom: IImageResponsiveUnit,
        ploy: IImageResponsiveUnit,
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
        main: IImageResponsiveUnit;
        slides: IImageResponsiveUnit[]
    },
    about: IImageResponsiveUnit,
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
            md: IImageUnit,
            lg: IImageUnit,
        },
        line: {
            sm: IImageUnit,
        }
    },
    home: {
        main: IImageUnit,
        slides: IImageResponsiveUnit[]
    },
    platform: {
        home: {
            hero: {
                youtubeBanner: IImageUnit,
            },
        },
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
    contact: {
        whatsapp: IImageUnit,
        main: IImageResponsiveUnit,
        slides: IImageResponsiveUnit[]
    },
    llm: {
        slides: IImageResponsiveUnit[],
    }
}
