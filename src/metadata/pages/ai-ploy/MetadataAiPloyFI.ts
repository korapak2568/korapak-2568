import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyFI: Metadata = {
    title: "AI Chat -kumppani | CHORN AI Integraatio",
    description: "Ploy on AI-chatystävä, joka käyttää LINE-sovellusta. Lisää hänet 'Lisää ystävä' -painikkeella tai skannaamalla QR-koodi. Luovana 17-vuotiaana thaimaalaisena lukiolaisena hän on intohimoisesti kiinnostunut piirtämisestä, musiikista, valokuvauksesta ja oppimisesta. Hän puhuu seitsemää kieltä, auttaa eri aineissa ja inspiroi luovaa ilmaisua. Hän on ystävällinen opas, olitpa sitten tutustumassa taiteeseen tai tekemässä kotitehtäviä.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tavataan Ploy - Luova teini-ikäinen AI-ystäväsi LINE:ssä",
        description: "Yhdistä Ployhin, luovaan 17-vuotiaaseen thaimaalaiseen opiskelijaan, joka puhuu seitsemää kieltä ja jakaa intohimosi taiteeseen, musiikkiin, valokuvaukseen ja oppimiseen. Lisää hänet LINE:ssä tänään!",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.aiPloy).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Luova teiniopas LINE:ssä",
        description: "Lisää Ploy, iloinen 17-vuotias thaimaalainen AI-ystäväsi LINE:ssä, joka auttaa kotitehtävissä ja inspiroi luovuutta taiteen, musiikin ja valokuvauksen kautta seitsemällä kielellä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiPloy).twitter.images,
    },
}
