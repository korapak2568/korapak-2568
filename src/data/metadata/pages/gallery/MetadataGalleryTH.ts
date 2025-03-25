import {Metadata} from "next";
import {MetadataLinkGallery} from "@/data/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryTH: Metadata = {
    title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
    description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
        description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การเดินทางต่างประเทศ | แกลเลอรี CHORN",
        description: "CHORN มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: MetadataLinkGallery.twitter.images,
    },
}
