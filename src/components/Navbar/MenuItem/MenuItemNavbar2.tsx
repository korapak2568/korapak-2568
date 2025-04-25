"use client"

import {isActiveSubMenu} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import {useDispatch} from "react-redux";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuItemNavbar2({lang, navbar2}: { lang: string, navbar2: INavbar }) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const isActiveNavbar2 = navbar2 != null ? isActiveSubMenu(pathname, '/' + lang + navbar2.link) : false

    return (
        <Link
            href={'/' + lang + navbar2.link}
            className={`nav-link ${isActiveNavbar2 ? "active x-active" : ""}`}
            onClick={() => dispatch(toggleMobileMenuVisible())}
        >
            {navbar2.label} {navbar2.isSubmenu && <i className="bx bx-chevron-down"></i>}
        </Link>
    )
}