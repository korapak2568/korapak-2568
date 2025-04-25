"use client"

import {setLanguageOption, toggleLanguageMenuVisible} from "@/provider/redux/AppSlice";
import {Globe} from "lucide-react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import React from "react";
import {useDispatch} from "react-redux";
import {useLanguageMenuVisible, useLanguageOption, useMobileMenuVisible} from "@/provider/hooks/AppStateHook";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";
import {useRouter} from "next/navigation";

export default function LanguageButton({lang}: { lang: string }) {
    const dispatch = useDispatch();
    const languageOption = useLanguageOption()
    const languageMenuVisible = useLanguageMenuVisible()
    const router = useRouter()

    const changeLanguage = (languageOption: ILanguageOption) => {
        dispatch(setLanguageOption(languageOption));
        dispatch(toggleLanguageMenuVisible());

        const pathSegments = window.location.pathname.split("/");
        const currentPath = pathSegments.slice(2).join("/") || "";

        router.push(`/${languageOption.language}/${currentPath}`);
    }

    return (
        <div className="navbar-langs">
            <button
                onClick={() =>
                    dispatch(toggleLanguageMenuVisible())}
                className="language-button"
                type="button"
                aria-label="Select language"
            >
                <Globe size={16} color="white" style={{marginRight: "5px"}}/>
                {languageOption.label}
            </button>
            {
                languageMenuVisible &&
                <ul className="dropdown-langs">
                    {InfoTranslation[lang].Translates.map((translate, index) =>
                        <li key={index}
                            className={translate.language == lang ? 'dropdown-active' : ''}
                            onClick={() => changeLanguage(translate)}
                        >
                            {translate.label}
                        </li>)}
                </ul>
            }
        </div>
    )
}