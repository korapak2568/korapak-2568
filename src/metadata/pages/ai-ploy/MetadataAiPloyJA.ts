import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyJA: Metadata = {
    title: "AI チャット仲間 | CHORN AI 統合",
    description: "Ploy は LINE アプリケーションを使用した AI チャットフレンドです。友達追加ボタンまたは QR コードをスキャンして彼女を追加できます。創造的な 17 歳のタイの高校生で、絵画、音楽、写真、学習に情熱を注いでいます。7 言語を話す Ploy はさまざまな科目で役立ち、創造的な表現をインスパイアします。アートを探求する時も、宿題をする時も、あなたのフレンドリーなガイドです。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Ploy と出会おう - LINE であなたの創造的なティーンエイジ AI フレンド",
        description: "7 言語を話す 17 歳のタイの学生 AI、Ploy とつながり、アート、音楽、写真、学習への情熱を共有しましょう。今すぐ LINE で彼女を追加！",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.aiPloy).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - LINE でのあなたの創造的なティーンガイド",
        description: "7 言語で宿題を手伝い、アート、音楽、写真を通じて創造性を刺激する、あなたの陽気な 17 歳のタイ AI 友達 Ploy を LINE で追加しましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiPloy).twitter.images,
    },
}
