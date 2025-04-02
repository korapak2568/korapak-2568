import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404FR: Metadata = {
    title: "404 - Page Non Trouvée",
    description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Page Non Trouvée",
        description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer CHORN.",
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Page Non Trouvée",
        description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer CHORN.",
        images: MetadataLink404.twitter.images,
    },
}