import {IGalleryItem} from "@/data/gallery/model/IGalleryItem";

export interface IGallery {
    slides: IGalleryItem[],
    global: IGalleryItem,
    globalSlides: IGalleryItem[]
}