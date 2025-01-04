import {IAiImage} from "@/data/ai/model/IAiImage";

export interface IAiDetail {
    title: string,
    content: string,
    image: {
        src: string,
        alt: string,
    },
    images: IAiImage[],
    line: {
        link: string,
        button: string
    }
}