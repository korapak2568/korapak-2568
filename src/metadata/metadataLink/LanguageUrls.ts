import {LanguageCode} from "@/data/translate/LanguageCode";

const LanguageUrl = (lang: string, canonical: string) => {
    return `${process.env.NEXT_PUBLIC_URL}${lang}${canonical}`
}

const LanguageUrls = (canonical: string): Record<string, string> => {
    return {
        en: LanguageUrl(LanguageCode.en, canonical),
        th: LanguageUrl(LanguageCode.th, canonical),
        fr: LanguageUrl(LanguageCode.fr, canonical),
        ja: LanguageUrl(LanguageCode.ja, canonical),
        zh: LanguageUrl(LanguageCode.zh, canonical),
        de: LanguageUrl(LanguageCode.de, canonical),
        nl: LanguageUrl(LanguageCode.nl, canonical),
        da: LanguageUrl(LanguageCode.da, canonical),
        fi: LanguageUrl(LanguageCode.fi, canonical),
        ko: LanguageUrl(LanguageCode.ko, canonical),
    }
}

export default LanguageUrls