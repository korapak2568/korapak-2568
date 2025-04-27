"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {IsActiveNavbar1, IsActiveNavbar3, IsActiveNavbar2} from "@/lib/utils";
import MenuLabelHorizontalLine from "@/components/Navbar/MenuItem/MenuLabelHorizontalLine";
import Image from "next/image";
import clsx from "clsx";

export default function MenuLevel2Container(
    {lang, pathname, navbar1}:
    { lang: string, pathname: string, navbar1: INavbar }) {
    const dispatch = useDispatch();
    const isActiveNavbar1 = IsActiveNavbar1(pathname, lang, navbar1, true)

    return (
        <div className="x-navbar1-only">
            {/* Navbar1 */}
            <Link
                href={'/' + lang + navbar1.link}
                className={`nav-link ${isActiveNavbar1 ? "active" : ""}`}
                onClick={() => dispatch(toggleMobileMenuVisible())}
            >
                <div className="x-navbar-label-container">
                    <div className="x-label">{navbar1.label}</div>
                    {navbar1.isSubmenu && <div className="x-icon-arrow-down"/>}
                </div>
            </Link>

            {/* Navbar2 Area */}
            <div className="x-navbar2-container">
                {navbar1.submenu.map((navbar2: INavbar, index) => {

                    // Horizontal line
                    if (navbar2.isSeparated) {
                        return (
                            <div key={index} className="x-navbar2-only">
                                <MenuLabelHorizontalLine key={index}/>
                            </div>
                        )
                    }

                    // Navbar2 without a submenu
                    if (!navbar2.isSubmenu) {
                        const isActiveNavbar2 = IsActiveNavbar2(pathname, lang, navbar2)
                        return (
                            <div key={index} className="x-navbar2-only">
                                <Link href={'/' + lang + navbar2.link}
                                      className={`nav-link ${isActiveNavbar2 ? "active" : ""}`}
                                      onClick={() => dispatch(toggleMobileMenuVisible())}
                                >
                                    <div className="x-navbar-label-container">
                                        <div className="x-label">{navbar2.label}</div>
                                        {navbar2.isSubmenu && <span className="x-icon-arrow-right"/>}
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    // Navar2 with Navbar3
                    const isActiveNavbar2fromNavbar3 = IsActiveNavbar2(pathname, lang, navbar2, true)
                    return (
                        <div key={index} className="x-navbar2-navbar3">
                            <Link
                                href={'/' + lang + navbar2.link}
                                className={`nav-link ${isActiveNavbar2fromNavbar3 ? "active" : ""}`}
                                onClick={() => dispatch(toggleMobileMenuVisible())}
                            >
                                <div className="x-navbar-label-container">
                                    <div className="x-label">{navbar2.label}</div>
                                    {navbar2.isSubmenu && <span className="x-icon-arrow-right"/>}
                                </div>
                            </Link>

                            {/* Navbar3 Icon */}
                            <div
                                className={clsx(
                                    "x-navbar3-only",
                                    {
                                        "x-is-frontend": navbar2.isFrontend,
                                        "x-is-backend": navbar2.isBackend,
                                        "x-is-devops": navbar2.isDevOps,
                                    }
                                )}>
                                {navbar2.submenu.map((navbar3: INavbar, index) => {
                                    const isActiveNavbar3 = IsActiveNavbar3(pathname, lang, navbar3)
                                    return (
                                        <div key={index} className={`x-navbar3-item-container`}>
                                            <Link
                                                className={`x-navbar3-item ${isActiveNavbar3 ? "active" : ""}`}
                                                href={'/' + lang + navbar3.link}
                                                onClick={() => dispatch(toggleMobileMenuVisible())}
                                            >
                                                {navbar3.image &&
                                                    <Image
                                                        src={navbar3.image}
                                                        alt={navbar3.label}
                                                        width={40}
                                                        height={40}/>}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}