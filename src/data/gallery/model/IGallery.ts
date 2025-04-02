import {IGalleryItem} from "@/data/gallery/model/IGalleryItem";
import {IGalleryItemImage} from "@/data/gallery/model/IGalleryItemImage";

export interface IGallery {
    slides: IGalleryItemImage[],
    global: IGalleryItem
}