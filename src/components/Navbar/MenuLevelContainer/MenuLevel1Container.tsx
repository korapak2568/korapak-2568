"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import {useDispatch} from "react-redux";
import {IsActiveNavbar1} from "@/lib/utils";
import {toggleMobileMenuVisible} from "@/provider/redux/slice/SliceApp";
import Link from "next/link";

export default function MenuLevel1Container(
    {lang, pathname, navbar1}:
    { lang: string, pathname: string, navbar1: INavbar }) {
    const dispatch = useDispatch();
    const isActiveNavbar1 = IsActiveNavbar1(pathname, lang, navbar1)

    return (
        <div className="x-navbar1-only">
            <Link
                href={'/' + lang + navbar1.link}
                className={`nav-link ${isActiveNavbar1 ? "active" : ""}`}
                onClick={() => dispatch(toggleMobileMenuVisible())}
            >
                {navbar1.label} {navbar1.isSubmenu && <span className="x-icon-arrow-right"/>}
            </Link>
        </div>
    )
}