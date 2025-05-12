import {LanguageOptionRecord} from "@/data/translate/LanguageOptionRecord";
import {IStateApp} from "@/provider/redux/model/IStateApp";

// Just a static fallback for when preloadedState isn't used
export const fallbackStateApp: IStateApp = {
    languageOption: LanguageOptionRecord['en'],
    language: 'en',
    mobileMenuVisible: true,
    languageMenuVisible: false,
    navbarGroup: "",
    navbarLink: "",
    isCookieConsent: undefined
};

// Factory function to dynamically initialize AppState
export const dynamicStateApp = (lang: string): IStateApp => ({
    languageOption: LanguageOptionRecord[lang] || LanguageOptionRecord["en"],
    language: lang,
    mobileMenuVisible: true,
    languageMenuVisible: false,
    navbarGroup: "",
    navbarLink: "",
    isCookieConsent: undefined
});