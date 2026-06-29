// ILanguageOption.ts
export interface ILanguageOption {
    language: string;
    label: string;
    locale: string
}

// ILanguageOptions.ts

export interface ILanguageOptions {
    en: ILanguageOption,
    th: ILanguageOption,
    zh: ILanguageOption,
    ja: ILanguageOption,
    ko: ILanguageOption,
    id: ILanguageOption,
    de: ILanguageOption,
    fr: ILanguageOption,
    ru: ILanguageOption,
    vi: ILanguageOption,
}
