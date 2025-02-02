import {IOpenGraph} from "@/data/metadata/model/IOpenGraph";

export const ImageVersion = "?v=2.1"

export const OpenGraph: IOpenGraph = {
    about: {
        url: "https://chorn.in.th/chorn-images/about/about-og-image.jpg" + ImageVersion,
        alt: "About CHORN Banner Image"
    },
    contact: {
        url: "https://chorn.in.th/chorn-images/contact/contact-og-image.jpg" + ImageVersion,
        alt: "Contact CHORN Banner Image"
    }
}