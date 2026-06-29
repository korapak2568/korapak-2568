"use client"

import {Globe} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useMemo, useState} from "react";
import {ILanguageOption} from "@/lib/model/ILanguage";
import {LOCALES} from "@/lib/SiteUrlLocales";

function getLocalizedPath(pathname: string, language: string) {
    const segments = pathname.split("/");
    const currentLocale = segments[1];

    if (LOCALES.includes(currentLocale as (typeof LOCALES)[number])) {
        segments[1] = language;
        return segments.join("/") || `/${language}/`;
    }

    return `/${language}${pathname === "/" ? "" : pathname}`;
}

export default function LanguageButton(
    {lang, languageOptions}: { lang: string, languageOptions: ILanguageOption[] }
) {
    const pathname = usePathname() || `/${lang}/`;
    const [isOpen, setIsOpen] = useState(false);
    const supportedLanguageOptions = useMemo(
        () => languageOptions.filter((option) => option?.language && option?.label),
        [languageOptions],
    );
    const selectedLanguageOption =
        supportedLanguageOptions.find((option) => option.language === lang) ??
        supportedLanguageOptions.find((option) => option.language === "en") ??
        supportedLanguageOptions[0] ??
        {language: lang, label: lang.toUpperCase(), locale: lang};

    return (
        <div className="navbar-langs">
            <button
                className="language-button"
                type="button"
                aria-label={`Current language: ${selectedLanguageOption.label}`}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
            >
                <Globe size={16} color="white" style={{marginRight: "5px"}}/>
                {selectedLanguageOption.label}
            </button>
            {isOpen ? (
                <ul className="dropdown-langs" role="listbox" aria-label="Select language">
                    {supportedLanguageOptions.map((option) => {
                        const isActive = option.language === selectedLanguageOption.language;

                        return (
                            <li key={option.language} role="option" aria-selected={isActive}>
                                <Link
                                    className={isActive ? "dropdown-active" : undefined}
                                    href={getLocalizedPath(pathname, option.language)}
                                    hrefLang={option.language}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {option.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    )
}
