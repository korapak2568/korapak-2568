import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

export interface IAppState {
    languageOption: ILanguageOption;
    language: string
    mobileMenuVisible: boolean
    languageMenuVisible: boolean,
    navbarGroup: string,
    navbarLink: string,
}