"use client"

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/provider/redux/store";
import {IStateApp} from "@/provider/redux/model/IStateApp";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

// App Selector
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector

// App state hooks
export const useStateApp: () => IStateApp = () =>
    useSelectorApp(state => state.app)

// App variable hooks
export const useLanguageOption: () => ILanguageOption = () =>
    useStateApp().languageOption

export const useLanguage: () => string = () =>
    useStateApp().languageOption.language

export const useMobileMenuVisible: () => boolean = () =>
    useStateApp().mobileMenuVisible

export const useLanguageMenuVisible: () => boolean = () =>
    useStateApp().languageMenuVisible

export const useCookieConsent: () => boolean | undefined = () =>
    useStateApp().isCookieConsent