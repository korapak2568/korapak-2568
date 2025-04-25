import {LanguageOptionRecord} from "@/data/translate/LanguageOptionRecord";
import {IAppState} from "@/provider/redux/model/IAppState";

// Just a static fallback for when preloadedState isn't used
export const fallbackAppState: IAppState = {
    languageOption: LanguageOptionRecord['en'],
    language: 'en',
    mobileMenuVisible: true,
    languageMenuVisible: false,
    navbarGroup: "",
    navbarLink: ""
};

// Factory function to dynamically initialize AppState
export const createAppStateInitial = (lang: string): IAppState => ({
    languageOption: LanguageOptionRecord[lang] || LanguageOptionRecord["en"],
    language: lang,
    mobileMenuVisible: true,
    languageMenuVisible: false,
    navbarGroup: "",
    navbarLink: ""
});