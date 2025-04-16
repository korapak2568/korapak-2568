"use client"

import {isActiveMainMenu, isActiveSubMenu} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import {useDispatch} from "react-redux";
import {IMenuLabel} from "@/components/Layouts/model/IMenuLabel";
import {useLanguage} from "@/provider/hooks/AppStateHook";

export default function MenuLabel({menuLabel}: { menuLabel: IMenuLabel }) {
    const dispatch = useDispatch();
    const language = useLanguage()
    const isActiveMain = isActiveMainMenu(menuLabel.pathname, menuLabel.group)
    const isActiveSub = isActiveSubMenu(menuLabel.pathname, '/' + language + menuLabel.link)
    const isCheckActiveMenu = menuLabel.isSubMenu ? isActiveSub : isActiveMain

    const saveClickedLinked = (group: string) => {
        localStorage.setItem("group", group)
        dispatch(toggleMobileMenuVisible())
    }

    return (
        <Link
            href={'/' + language + menuLabel.link}
            className={`nav-link ${isCheckActiveMenu ? "active x-active" : ""}`}
            onClick={() => saveClickedLinked(menuLabel.group)}
        >
            {menuLabel.label} {menuLabel.isIncludeSubMenu && <i className="bx bx-chevron-down"></i>}
        </Link>
    )
}