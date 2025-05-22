"use client"

import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {INavbar} from "@/data/navbar/model/INavbar";
import React from "react";
import {useMobileMenuVisible} from "@/provider/hooks/hookStateApp";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IsActiveNavbar1} from "@/lib/utils";
import clsx from "clsx";

export default function DesktopNavbarContainer({lang}: { lang: string }) {
    const mobileMenuVisible = useMobileMenuVisible()
    const pathname = usePathname()

    const classOne = mobileMenuVisible
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";

    return (
        <div className={classOne} id="navbarSupportedContent">
            <div className="x-nav-premium-container">
                <div className="nav-line1-container">
                    {InfoTranslation[lang].Navbar.map(
                        (navbar: INavbar, index) => {
                            const isActiveNavbar1 = IsActiveNavbar1(pathname, lang, navbar)
                            return (
                                <Link key={index} href={"/" + lang + "/" + navbar.link}>
                                    <div key={index} className={clsx("nav-line1-item", {
                                        "active": isActiveNavbar1
                                    })}>
                                        {navbar.label}
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}