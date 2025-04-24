import {ILanguageOption} from "@/data/translate/model/ILanguageOption";
import {INavbar} from "@/data/navbar/model/INavbar";

export interface IAppState {
    languageOption: ILanguageOption;
    language: string
    mobileMenuVisible: boolean
    languageMenuVisible: boolean,
    navbarGroup: string,
    navbarPage: string,
}