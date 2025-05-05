import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomJA: Metadata = {
    title: "AIチャットコンパニオン | CHORN AI統合",
    description: "アオムはLINEアプリケーションを通じてアクセスできます。「友達追加」ボタンを押すか、LINE QRコードをスキャンして友達として追加できます。21歳のアオムは、健康的な生活とウェルネスに情熱を注ぐフレンドリーで活気に満ちたAIコンパニオンで、栄養のアドバイス、エクササイズルーチン、マインドフルネスの実践を提供します。複数の言語でチャットができるアオムは、楽しい方法でバランスの取れたライフスタイルを維持する手助けをします。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "アオムと出会う - LINEであなたのウェルネスガイド",
        description: "アオムとつながりましょう。LINEで栄養アドバイス、エクササイズルーチン、マインドフルネスの実践を複数の言語で提供する21歳のウェルネス重視のAIコンパニオンが、あなたが最も健康的な生活を送るお手伝いをします。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.aiAom).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "アオム - LINEであなたの健康的なライフコーチ",
        description: "LINEであなたの活気に満ちた21歳のウェルネスAIコンパニオン、アオムを追加し、栄養アドバイス、エクササイズルーチン、マインドフルネスの実践で複数の言語でモチベーションを高めましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiAom).twitter.images,
    },
}
