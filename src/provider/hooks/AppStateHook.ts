"use client"

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/provider/redux/store";
import {IAppState} from "@/provider/redux/model/IAppState";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

// App Selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// App state hooks
export const useAppState: () => IAppState = () =>
    useAppSelector(state => state.app)

// App variable hooks
export const useLanguageOption: () => ILanguageOption = () =>
    useAppState().languageOption

export const useLanguage: () => string = () =>
    useAppState().languageOption.language

export const useMobileMenuVisible: () => boolean = () =>
    useAppState().mobileMenuVisible

export const useLanguageMenuVisible: () => boolean = () =>
    useAppState().languageMenuVisible

export const useCookieConsent: () => boolean | undefined = () =>
    useAppState().isCookieConsent