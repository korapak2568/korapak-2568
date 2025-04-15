"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";
import {useLanguage} from "@/provider/hooks/LanguageHook";
import MenuLabel, {IMenuLabel} from "@/components/Layouts/Menu/MenuLabel";
import MenuDropDown from "@/components/Layouts/Menu/MenuDropDown";

export default function MenuItem({group, label, link, submenu}:
                                 { group: string, label: string, link: string, submenu: INavbar[] }) {
    const pathname = usePathname();
    const language = useLanguage()
    const menuLabel: IMenuLabel = {language, link, pathname, group, label}
    const menuLabelIncludeSubmenu: IMenuLabel = {language, link, pathname, group, label, isIncludeSubMenu: true}

    return submenu.length == 0 ?
        <li className="nav-item">
            <MenuLabel menuLabel={menuLabel}/>
        </li>
        :
        <li className="nav-item">
            <MenuLabel menuLabel={menuLabelIncludeSubmenu}/>
            <MenuDropDown submenu={submenu} language={language} pathname={pathname} group={group}/>
        </li>
}