"use client";

import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import {INavbar} from "@/data/navbar/model/INavbar";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {Globe} from "lucide-react";
import {useDispatch} from "react-redux";
import {
    setLanguageOption,
    toggleLanguageMenuVisible, toggleMobileMenuVisible
} from "@/provider/redux/AppSlice";
import {useRouter} from "next/navigation";
import {ImageUrl} from "@/image/ImageUrl";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";
import {
    useLanguage,
    useLanguageMenuVisible,
    useLanguageOption,
    useMobileMenuVisible
} from "@/provider/hooks/AppStateHook";

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch();
    const language = useLanguage()
    const languageOption = useLanguageOption()
    const mobileMenuVisible = useMobileMenuVisible()
    const languageMenuVisible = useLanguageMenuVisible()

    const changeLanguage = (languageOption: ILanguageOption) => {
        dispatch(setLanguageOption(languageOption));
        dispatch(toggleLanguageMenuVisible());

        const pathSegments = window.location.pathname.split("/");
        const currentPath = pathSegments.slice(2).join("/") || "";

        router.push(`/${languageOption.language}/${currentPath}`);
    }

    const isActiveTranslate = (languageOption: ILanguageOption) => {
        return languageOption.language == language;
    }

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId?.classList.add("is-sticky");
            } else {
                elementId?.classList.remove("is-sticky");
            }
        });
    }, []);

    // Search Modal
    const classOne = mobileMenuVisible
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = mobileMenuVisible
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/" className="navbar-brand add-navbar-logo">
                                <Image
                                    src={ImageUrl.logo.rec.sm.path}
                                    alt={ImageUrl.logo.rec.sm.title}
                                    width={150}
                                    height={75}
                                />
                            </Link>

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
                                        {InfoTranslation[language].Translates.map((translate, index) =>
                                            <li key={index}
                                                className={isActiveTranslate(translate) ? 'dropdown-active' : ''}
                                                onClick={() => changeLanguage(translate)}
                                            >
                                                {translate.label}
                                            </li>)}
                                    </ul>
                                }
                            </div>

                            <button
                                onClick={() =>
                                    dispatch(toggleMobileMenuVisible())}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    {InfoTranslation[language].Navbar.map((menuItem: INavbar, index) => {
                                        return <MenuItem key={index} {...menuItem} />
                                    })}
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}