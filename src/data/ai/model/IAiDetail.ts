import {IAiImage} from "@/data/ai/model/IAiImage";
import {IImageUnit} from "@/data/image/model/IImageUnit";

export interface IAiDetail {
    name: string;
    category: string;
    thumbnail: string;
    pages: {
        home: {
            link: string;
            image: IImageUnit,
        },
        landing: {
            link: string;
            image: IImageUnit
        };
    },

    title: string,
    content: string,
    images: IAiImage[],
    line: {
        link: string,
        button: string
    }
}