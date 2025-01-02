import {IImage} from "@/data/model/common/IImage";

export interface IAiAll {
    fah: IAiPerson
}

export interface IAiPerson {
    title: string,
    content: string,
    image: {
        src: string,
        alt: string,
    },
    images: IImage[],
    line: {
        link: string,
        button: string
    }
}