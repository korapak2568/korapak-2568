import {ICloud} from "@/data/cloud/model/ICloud";
import {IMAGE_PATH} from "@/image/ImageUrl";

export const CloudTH: ICloud = {
    title: "Cloud Experience",
    span: "Outstanding Cloud Experience",
    subTitle: "",
    stacks: [
        {
            title: "AWS",
            description: "Cloud Experience",
            image: IMAGE_PATH + "/cloud/thumbnail/aws.webp",
            alt: "Logo representing AWS technology experience",
            readMore: "Learn metadataLink AWS cloud solutions and technical-expertise",
            link: "/technical-expertise/details",
        },
        {
            title: "Azure",
            description: "Cloud Experience",
            image: IMAGE_PATH + "/cloud/thumbnail/azure.webp",
            alt: "Logo representing Azure technology experience",
            readMore: "Explore Azure cloud technical-expertise and infrastructure solutions",
            link: "/technical-expertise/details",
        },
        {
            title: "GCP",
            description: "Cloud Experience",
            image: IMAGE_PATH + "/cloud/thumbnail/gcp.webp",
            alt: "Logo representing GCP technology experience",
            readMore: "Find out metadataLink Google Cloud Platform technical-expertise",
            link: "/technical-expertise/details",
        },
        {
            title: "Cloud",
            description: "Digital Ocean",
            image: IMAGE_PATH + "/cloud/thumbnail/digital-ocean.webp",
            alt: "Logo representing DigitalOcean technology experience",
            readMore: "Learn metadataLink DigitalOcean cloud solutions for developers",
            link: "/technical-expertise/details",
        },
    ],
}