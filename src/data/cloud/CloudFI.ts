import {ICloud} from "@/data/cloud/model/ICloud";
import {IMAGE_PATH} from "@/image/ImageUrl";

export const CloudFI: ICloud = {
    title: "Pilvikokemus",
    span: "Erinomainen pilvikokemus",
    subTitle: "",
    stacks: [
        {
            title: "AWS",
            description: "Pilvikokemus",
            image: IMAGE_PATH + "/cloud/thumbnail/aws.webp",
            alt: "Logo, joka edustaa AWS-teknologiakokemusta",
            readMore: "Tutustu malliin AWS-pilvitoiminnot ja tekninen asiantuntemus",
            link: "/technical-expertise/details",
        },
        {
            title: "Azure",
            description: "Pilvikokemus",
            image: IMAGE_PATH + "/cloud/thumbnail/azure.webp",
            alt: "Logo, joka edustaa Azure-teknologiakokemusta",
            readMore: "Tutustu Azure-pilven tekniseen asiantuntemukseen ja infrastruktuuriratkaisuihin",
            link: "/technical-expertise/details",
        },
        {
            title: "GCP",
            description: "Pilvikokemus",
            image: IMAGE_PATH + "/cloud/thumbnail/gcp.webp",
            alt: "Logo, joka edustaa GCP-teknologiakokemusta",
            readMore: "Tutustu malliin Google Cloud Platform tekninen asiantuntemus",
            link: "/technical-expertise/details",
        },
        {
            title: "Cloud",
            description: "Digital Ocean",
            image: IMAGE_PATH + "/cloud/thumbnail/digital-ocean.webp",
            alt: "Logo, joka edustaa DigitalOcean-teknologiakokemusta",
            readMore: "Tutustu malliin DigitalOcean-pilvitoiminnot kehittäjille",
            link: "/technical-expertise/details",
        },
    ],
}