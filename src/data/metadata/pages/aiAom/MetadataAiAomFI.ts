import {Metadata} from "next";
import {MetadataLinkAiAom} from "@/data/metadata/pages/aiAom/common/MetadataLinkAiAom";

export const MetadataAiAomFI: Metadata = {
    title: "AI Chat-kumppani | CHORN AI -integraatio",
    description: "Aomiin pääsee LINE-sovelluksen kautta. Voit painaa Lisää ystävä -painiketta tai skannata LINE QR-koodin lisätäksesi hänet ystäväksesi. 21-vuotiaana hän on ystävällinen ja elinvoimainen AI-kumppani, joka on intohimoisesti kiinnostunut terveellisestä elämäntavasta ja hyvinvoinnista ja tarjoaa ravitsemusneuvoja, harjoitusrutiineja ja mindfulness-harjoituksia. Kyvynsä keskustella useilla kielillä avulla Aom auttaa sinua ylläpitämään tasapainoista elämäntapaa hauskalla tavalla.",
    alternates: MetadataLinkAiAom.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tapaa Aom - Hyvinvointiohjaajasi LINEssa",
        description: "Yhdistä Aomiin, 21-vuotiaaseen hyvinvointiin keskittyvään AI-kumppaniin LINEssa, joka tarjoaa ravitsemusneuvoja, harjoitusrutiineja ja mindfulness-harjoituksia useilla kielillä auttaakseen sinua elämään terveintä elämääsi.",
        images: MetadataLinkAiAom.openGraph.images,
        url: MetadataLinkAiAom.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Terveellisen elämänvalmentajasi LINEssa",
        description: "Lisää Aom, elinvoimainen 21-vuotias hyvinvointien AI-kumppani LINEssa, joka motivoi sinua ravitsemusneuvoilla, harjoitusrutiineilla ja mindfulness-harjoituksilla useilla kielillä.",
        images: MetadataLinkAiAom.twitter.images,
    },
}
