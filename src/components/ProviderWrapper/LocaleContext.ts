import {createContext, useContext} from "react";
import {TranslateRecord} from "@/data/translate/TranslateRecord";
import {useDispatch} from "react-redux";
import {setTranslate} from "@/redux/serviceSlice";

export const LocaleContext = createContext<string | undefined>(undefined);

export const useLocale = () => {
    const language = useContext(LocaleContext);
    if (!language) throw new Error("useLocale() must be used within the LocaleProvider");

    const translate = TranslateRecord[language]
    const dispatch = useDispatch();
    dispatch(setTranslate(translate));

    return translate;
}