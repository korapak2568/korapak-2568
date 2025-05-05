import {LanguageCode} from "@/data/translate/LanguageCode";

const canonicalUrl = (lang: string, canonical: string) => {
    return `${process.env.NEXT_PUBLIC_URL}${lang}${canonical}`
}

export const canonicalUrls = (canonical: string): Record<string, string> => {
    return {
        en: canonicalUrl(LanguageCode.en, canonical),
        th: canonicalUrl(LanguageCode.th, canonical),
        fr: canonicalUrl(LanguageCode.fr, canonical),
        ja: canonicalUrl(LanguageCode.ja, canonical),
        vi: canonicalUrl(LanguageCode.vi, canonical),
        zh: canonicalUrl(LanguageCode.zh, canonical),
        de: canonicalUrl(LanguageCode.de, canonical),
        nl: canonicalUrl(LanguageCode.nl, canonical),
        da: canonicalUrl(LanguageCode.da, canonical),
        fi: canonicalUrl(LanguageCode.fi, canonical),
        ko: canonicalUrl(LanguageCode.ko, canonical),
    }
}