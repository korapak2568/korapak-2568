import {ILanguageOption} from "@/data/translate/model/ILanguageOption";
import {INavbar} from "@/data/navbar/model/INavbar";

export interface IAppState {
    languageOption: ILanguageOption;
    language: string
    mobileMenuVisible: boolean
    languageMenuVisible: boolean,
    activeNavbar: INavbar,
    navbarGroup: string,
    navbarPage: string,
}