import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomFI: Metadata = {
    title: "AI Chat-kumppani | CHORN AI -integraatio",
    description: "Aomiin pääsee LINE-sovelluksen kautta. Voit painaa Lisää ystävä -painiketta tai skannata LINE QR-koodin lisätäksesi hänet ystäväksesi. 21-vuotiaana hän on ystävällinen ja elinvoimainen AI-kumppani, joka on intohimoisesti kiinnostunut terveellisestä elämäntavasta ja hyvinvoinnista ja tarjoaa ravitsemusneuvoja, harjoitusrutiineja ja mindfulness-harjoituksia. Kyvynsä keskustella useilla kielillä avulla Aom auttaa sinua ylläpitämään tasapainoista elämäntapaa hauskalla tavalla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tapaa Aom - Hyvinvointiohjaajasi LINEssa",
        description: "Yhdistä Aomiin, 21-vuotiaaseen hyvinvointiin keskittyvään AI-kumppaniin LINEssa, joka tarjoaa ravitsemusneuvoja, harjoitusrutiineja ja mindfulness-harjoituksia useilla kielillä auttaakseen sinua elämään terveintä elämääsi.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.aiAom).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Terveellisen elämänvalmentajasi LINEssa",
        description: "Lisää Aom, elinvoimainen 21-vuotias hyvinvointien AI-kumppani LINEssa, joka motivoi sinua ravitsemusneuvoilla, harjoitusrutiineilla ja mindfulness-harjoituksilla useilla kielillä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiAom).twitter.images,
    },
}
