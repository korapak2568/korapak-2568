import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainNL: Metadata = {
    title: "Frontend Ontwikkelingsdiensten | CHORN",
    description: "CHORN biedt deskundige frontend-ontwikkeling met moderne frameworks zoals Next.js, React, Angular, Vue, HTML5 en CSS3. Bouw responsieve en schaalbare websites met de nieuwste technologieën.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Frontend Ontwikkelingsdiensten | CHORN",
        description: "CHORN biedt frontend-ontwikkeling met moderne technologieën zoals Next.js, React, Angular, Vue, HTML5 en CSS3 om snelle, responsieve en schaalbare websites te bouwen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Ontwikkelingsdiensten | CHORN",
        description: "Deskundige frontend-ontwikkeling door CHORN met Next.js, React, Angular, Vue, HTML5 en CSS3 voor responsieve en schaalbare websites.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "frontend ontwikkeling", "frontend expertise", "frontend ontwikkelaar", "aangepaste frontend ontwikkeling",
        "dynamische gebruikersinterfaces", "single-page applicaties", "responsief webdesign",
        "hoogwaardige frontend toepassingen", "maatwerk softwareontwikkeling",
        "React ontwikkeling", "Angular ontwikkeling", "Vue.js ontwikkeling", "Next.js frontend ontwikkeling",
        "React.js ontwikkeling", "aangepaste Angular frontend ontwikkeling", "React.js frontend toepassingen",
        "Vue.js frontend expertise", "aangepaste Vue.js ontwikkeling",
        "frontend ontwikkelaar Nederland", "webontwikkelaar Nederland", "software engineer Nederland",
        "CHORN", "digitale innovatie", "ondernemingssoftware", "schaalbare webapplicaties"
    ]
}