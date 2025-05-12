import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

export interface IStateApp {
    languageOption: ILanguageOption;
    language: string
    mobileMenuVisible: boolean
    languageMenuVisible: boolean,
    navbarGroup: string,
    navbarLink: string,
    isCookieConsent: boolean | undefined
}