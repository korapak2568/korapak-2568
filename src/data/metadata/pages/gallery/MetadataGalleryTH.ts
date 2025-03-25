import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryTH: Metadata = {
    title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
    description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
        description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
        description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: MetadataLinkAbout.twitter.images,
    },
}
