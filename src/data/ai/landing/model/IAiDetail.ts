import {IAiImage} from "@/data/ai/model/IAiImage";
import {IImageDetail} from "@/data/image/model/IImageDetail";

export interface IAiDetail {
    name: string;
    category: string;
    thumbnail: string;
    pages: {
        home: {
            link: string;
            image: IImageDetail,
        },
        landing: {
            link: string;
            image: IImageDetail
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