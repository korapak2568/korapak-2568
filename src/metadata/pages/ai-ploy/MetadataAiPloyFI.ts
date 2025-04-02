import {Metadata} from "next";
import {MetadataLinkAiPloy} from "@/metadata/pages/ai-ploy/common/MetadataLinkAiPloy";

export const MetadataAiPloyFI: Metadata = {
    title: "AI Chat -kumppani | CHORN AI Integraatio",
    description: "Ploy on AI-chatystävä, joka käyttää LINE-sovellusta. Lisää hänet 'Lisää ystävä' -painikkeella tai skannaamalla QR-koodi. Luovana 17-vuotiaana thaimaalaisena lukiolaisena hän on intohimoisesti kiinnostunut piirtämisestä, musiikista, valokuvauksesta ja oppimisesta. Hän puhuu seitsemää kieltä, auttaa eri aineissa ja inspiroi luovaa ilmaisua. Hän on ystävällinen opas, olitpa sitten tutustumassa taiteeseen tai tekemässä kotitehtäviä.",
    alternates: MetadataLinkAiPloy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tavataan Ploy - Luova teini-ikäinen AI-ystäväsi LINE:ssä",
        description: "Yhdistä Ployhin, luovaan 17-vuotiaaseen thaimaalaiseen opiskelijaan, joka puhuu seitsemää kieltä ja jakaa intohimosi taiteeseen, musiikkiin, valokuvaukseen ja oppimiseen. Lisää hänet LINE:ssä tänään!",
        images: MetadataLinkAiPloy.openGraph.images,
        url: MetadataLinkAiPloy.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Luova teiniopas LINE:ssä",
        description: "Lisää Ploy, iloinen 17-vuotias thaimaalainen AI-ystäväsi LINE:ssä, joka auttaa kotitehtävissä ja inspiroi luovuutta taiteen, musiikin ja valokuvauksen kautta seitsemällä kielellä.",
        images: MetadataLinkAiPloy.twitter.images,
    },
}
