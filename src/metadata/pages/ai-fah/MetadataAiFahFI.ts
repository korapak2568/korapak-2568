import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiFahFI: Metadata = {
    title: "AI Chat Companion | CHORN AI Integraatio",
    description: "Fah on AI-chatystäväsi LINE-sovelluksessa. Hän on 20-vuotias Thaimaasta inspiroitunut iloinen ja lähestyttävä kumppani. Lisää hänet yhdellä klikkauksella tai skannaa hänen QR-koodinsa löytääksesi Thaimaan parhaat matkakohteet, ruoat ja kulttuuriset aarteet. Keskustele useilla kielillä samalla kun hän vie sinut läpi Thaimaan kulttuuria nuorekkaalla energialla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.aiFah).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tavataa Fah - Thaimaalainen AI-chatystäväsi LINE:ssä",
        description: "Tavataa Fah, 20-vuotias thaimaalainen AI-ystäväsi LINE:ssä, joka suosittelee Thaimaan parhaita matkakohteita, ruokia ja kulttuurikokemuksia useilla kielillä. Lisää hänet tänään!",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiFah).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.aiFah).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Thaimaalainen kulttuurioppaasi LINE:ssä",
        description: "Lisää Fah, iloinen 20-vuotias thaimaalainen AI-kumppani LINE:ssä, joka auttaa sinua tutkimaan Thaimaan matkakohteita, ruokaa ja kulttuuria useilla kielillä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiFah).twitter.images,
    },
}