"use client"

import {useSelector} from "react-redux";
import {RootState} from "@/provider/redux/store";
import {IAppState} from "@/provider/redux/model/IAppState";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

export const useLanguageOptionHook: () => ILanguageOption = () => useSelector((state: RootState) => state.app.languageOption)
export const useAppStateHook: () => IAppState = () => useSelector((state: RootState) => state.app)

export const useLanguageHook: () => string = () => useLanguageOptionHook().language
export const useMobileMenuVisibleHook = () => useAppStateHook().mobileMenuVisible
export const useLanguageMenuVisibleHook = () => useAppStateHook().languageMenuVisible