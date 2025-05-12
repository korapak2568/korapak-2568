"use client"

import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLevelContainer from "@/components/Navbar/MenuLevelContainer/MenuLevelContainer";
import React from "react";
import {useMobileMenuVisible} from "@/provider/hooks/hookStateApp";
import {usePathname} from "next/navigation";

export default function MenuContainer({lang}: { lang: string }) {
    const mobileMenuVisible = useMobileMenuVisible()
    const pathname = usePathname()

    const classOne = mobileMenuVisible
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";

    return (
        <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
                {InfoTranslation[lang].Navbar.map(
                    (navbar: INavbar, index) =>
                        <MenuLevelContainer
                            key={index}
                            lang={lang}
                            pathname={pathname}
                            navbar1={navbar}
                        />
                )}
            </ul>
        </div>
    )
}