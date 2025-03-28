import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonNL: Metadata = {
    title: "Python Full Stack Ontwikkeling | CHORN",
    description: "Python full stack ontwikkeling, technische expertise voor het bouwen van dynamische en schaalbare webapplicaties.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Ontwikkeling | CHORN",
        description: "Bouw dynamische en schaalbare webapplicaties met de technische expertise van Python full stack ontwikkeling.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Ontwikkeling | CHORN",
        description: "Expertise in Python full stack ontwikkeling voor dynamische en schaalbare webapplicaties.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Python ontwikkeling", "Python technische expertise", "Python ontwikkelaar", "maatwerk Python ontwikkeling", "Python webapplicaties",
        "Python backend ontwikkeling", "Python full stack ontwikkeling", "maatwerk software ontwikkeling",
        "Schaalbare webapplicaties", "Backend ontwikkeling", "Enterprise Python applicaties",
        "Hoge prestaties applicaties", "Maatwerk webapplicaties", "API ontwikkeling", "Machine learning ontwikkeling",
        "Python ontwikkelaar Thailand", "Python ontwikkelaar Bangkok", "Python ontwikkelaar Chiang Mai",
        "Backend ontwikkelaar Thailand", "Software engineer", "Software ontwikkelaar Thailand",
        "CHORN", "Digitale innovatie", "Enterprise software"
    ]
}
