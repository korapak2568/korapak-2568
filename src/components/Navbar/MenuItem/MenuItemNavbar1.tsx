"use client"

import {isActiveMainMenu, isActiveSubMenu} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import {useDispatch} from "react-redux";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuItemNavbar1({lang, navbar1}: { lang: string, navbar1: INavbar }) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const isActiveNavbar1 = navbar1 != null ? isActiveMainMenu(pathname, navbar1.group) : false

    return (
        <Link
            href={'/' + lang + navbar1.link}
            className={`nav-link ${isActiveNavbar1 ? "active x-active" : ""}`}
            onClick={() => dispatch(toggleMobileMenuVisible())}
        >
            {navbar1.label} {navbar1.isSubmenu && <i className="bx bx-chevron-down"></i>}
        </Link>
    )
}