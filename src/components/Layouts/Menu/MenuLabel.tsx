"use client"

import {isActiveMainMenu, isActiveSubMenu} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {ITranslate} from "@/data/translate/model/ITranslate";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import {useDispatch} from "react-redux";

export interface IMenuLabel {
    language: ITranslate
    link: string,
    pathname: string
    group: string
    label: string
    isIncludeSubMenu?: boolean,
    isSubMenu?: boolean,
}

export default function MenuLabel({menuLabel}: { menuLabel: IMenuLabel }) {
    const dispatch = useDispatch();

    const isActiveMain = isActiveMainMenu(menuLabel.pathname, menuLabel.group)
    const isActiveSub = isActiveSubMenu(menuLabel.pathname, '/' + menuLabel.language.value + menuLabel.link)
    const isCheckActiveMenu = menuLabel.isSubMenu ? isActiveSub : isActiveMain

    const saveClickedLinked = (group: string) => {
        localStorage.setItem("group", group)
        dispatch(toggleMobileMenuVisible())
    }

    return (
        <Link
            href={'/' + menuLabel.language.value + menuLabel.link}
            className={`nav-link ${isCheckActiveMenu ? "active add-navbar-active" : ""}`}
            onClick={() => saveClickedLinked(menuLabel.group)}
        >
            {menuLabel.label} {menuLabel.isIncludeSubMenu && <i className="bx bx-chevron-down"></i>}
        </Link>
    )
}