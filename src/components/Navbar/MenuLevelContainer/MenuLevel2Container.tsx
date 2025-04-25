import React from "react";
import MenuLevel2Dropdown from "@/components/Navbar/MenuItem/MenuLevel2Dropdown";
import {INavbar} from "@/data/navbar/model/INavbar";
import {toggleMobileMenuVisible} from "@/provider/redux/AppSlice";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {usePathname} from "next/navigation";
import {isActiveMainMenu} from "@/lib/utils";

export default function MenuLevel2Container({lang, navbar1}: { lang: string, navbar1: INavbar }) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const isActiveNavbar1 = navbar1 != null ? isActiveMainMenu(pathname, navbar1.group) : false

    return (
        <div className="x-navbar-item">
            <Link
                href={'/' + lang + navbar1.link}
                className={`nav-link ${isActiveNavbar1 ? "active x-active" : ""}`}
                onClick={() => dispatch(toggleMobileMenuVisible())}
            >
                {navbar1.label} {navbar1.isSubmenu && <i className="bx bx-chevron-down"></i>}
            </Link>

            <MenuLevel2Dropdown lang={lang} navbar1={navbar1}/>
        </div>
    )
}