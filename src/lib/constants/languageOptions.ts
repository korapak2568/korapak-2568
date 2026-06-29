import {ILanguageOption, ILanguageOptions} from "@/lib/model/ILanguage";

export const LanguageOptionDefinition: ILanguageOptions = {
    en: {
        language: "en",
        label: "English",
        locale: "en-US",
    },
    th: {
        language: "th",
        label: "ภาษาไทย",
        locale: "th-TH",
    },
    zh: {
        language: "zh",
        label: "中文",
        locale: "zh-CN",
    },
    ja: {
        language: "ja",
        label: "日本語",
        locale: "ja-JP",
    },
    ko: {
        language: "ko",
        label: "한국어",
        locale: "ko-KR",
    },
    id: {
        language: "id",
        label: "Bahasa Indonesia",
        locale: "id-ID",
    },
    de: {
        language: "de",
        label: "Deutsch",
        locale: "de-DE",
    },
    fr: {
        language: "fr",
        label: "Français",
        locale: "fr-FR",
    },
    ru: {
        language: "ru",
        label: "Русский",
        locale: "ru-RU",
    },
    vi: {
        language: "vi",
        label: "Tiếng Việt",
        locale: "vi-VN",
    },
};

export const LanguageCode: Record<string, string> = {
    en: LanguageOptionDefinition.en.language,
    th: LanguageOptionDefinition.th.language,
    zh: LanguageOptionDefinition.zh.language,
    ja: LanguageOptionDefinition.ja.language,
    ko: LanguageOptionDefinition.ko.language,
    id: LanguageOptionDefinition.id.language,
    de: LanguageOptionDefinition.de.language,
    fr: LanguageOptionDefinition.fr.language,
    ru: LanguageOptionDefinition.ru.language,
    vi: LanguageOptionDefinition.vi.language,
    da: LanguageOptionDefinition.en.language,
    fi: LanguageOptionDefinition.en.language,
    nl: LanguageOptionDefinition.en.language,
};

export const LanguageOptionRecord: Record<string, ILanguageOption> = {
    en: LanguageOptionDefinition.en,
    th: LanguageOptionDefinition.th,
    zh: LanguageOptionDefinition.zh,
    ja: LanguageOptionDefinition.ja,
    ko: LanguageOptionDefinition.ko,
    id: LanguageOptionDefinition.id,
    de: LanguageOptionDefinition.de,
    fr: LanguageOptionDefinition.fr,
    ru: LanguageOptionDefinition.ru,
    vi: LanguageOptionDefinition.vi,
};

export const LanguageOptionList: ILanguageOption[] = [
    LanguageOptionDefinition.en,
    LanguageOptionDefinition.th,
    LanguageOptionDefinition.zh,
    LanguageOptionDefinition.ja,
    LanguageOptionDefinition.ko,
    LanguageOptionDefinition.id,
    LanguageOptionDefinition.de,
    LanguageOptionDefinition.fr,
    LanguageOptionDefinition.ru,
    LanguageOptionDefinition.vi,
];
