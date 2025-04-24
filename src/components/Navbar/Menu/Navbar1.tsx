"use client"

import {isActiveMainMenu, isActiveSubMenu} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import {useDispatch} from "react-redux";
import {useLanguage} from "@/provider/hooks/AppStateHook";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function Navbar1({navbar1, navbar2 = null}: { navbar1: INavbar, navbar2?: INavbar | null }) {
    const dispatch = useDispatch();
    const language = useLanguage()
    const pathname = usePathname();
    const isActiveNavbar1 = navbar1 != null ? isActiveMainMenu(pathname, navbar1.group) : false
    const isActiveNavbar2 = navbar2 != null ? isActiveSubMenu(pathname, '/' + language + navbar2.link) : false
    const isCheckActiveMenu = navbar2 != null ? isActiveNavbar2 : isActiveNavbar1

    const saveClickedLinked = (group: string) => {
        localStorage.setItem("group", group)
        dispatch(toggleMobileMenuVisible())
    }

    if (navbar2 != null) {
        return (
            <Link
                href={'/' + language + navbar2.link}
                className={`nav-link ${isCheckActiveMenu ? "active x-active" : ""}`}
                onClick={() => saveClickedLinked(navbar2.group)}
            >
                {navbar2.label} {navbar2.isSubmenu && <i className="bx bx-chevron-down"></i>}
            </Link>
        )
    }

    return (
        <Link
            href={'/' + language + navbar1.link}
            className={`nav-link ${isCheckActiveMenu ? "active x-active" : ""}`}
            onClick={() => saveClickedLinked(navbar1.group)}
        >
            {navbar1.label} {navbar1.isSubmenu && <i className="bx bx-chevron-down"></i>}
        </Link>
    )
}