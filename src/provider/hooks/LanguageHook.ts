"use client"

import {useContext} from "react";
import {TranslateRecord} from "@/data/translate/TranslateRecord";
import {useDispatch} from "react-redux";
import {setTranslate} from "@/provider/redux/AppSlice";
import {LanguageContext} from "@/provider/context/DefineContext";

export const useLanguage = () => {
    const language = useContext(LanguageContext);
    if (!language) throw new Error("useLocale() must be used within the LocaleProvider");

    const translate = TranslateRecord[language]
    const dispatch = useDispatch();
    dispatch(setTranslate(translate));

    return translate;
}