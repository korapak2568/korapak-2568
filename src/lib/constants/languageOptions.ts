import languageOptions from "@/data/layout/languages/languages.json";
import {ILanguageOption, ILanguageOptions} from "@/lib/model/ILanguage";

export const LanguageOptionList = languageOptions as ILanguageOption[];

export const LanguageOptionRecord: Record<string, ILanguageOption> = Object.fromEntries(
    LanguageOptionList.map((option) => [option.language, option]),
);

export const LanguageOptionDefinition: ILanguageOptions = {
    en: LanguageOptionRecord.en,
    th: LanguageOptionRecord.th,
    zh: LanguageOptionRecord.zh,
    ja: LanguageOptionRecord.ja,
    ko: LanguageOptionRecord.ko,
    id: LanguageOptionRecord.id,
    de: LanguageOptionRecord.de,
    fr: LanguageOptionRecord.fr,
    ru: LanguageOptionRecord.ru,
    vi: LanguageOptionRecord.vi,
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