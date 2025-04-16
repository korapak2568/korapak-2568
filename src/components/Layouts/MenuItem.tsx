"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLabel from "@/components/Layouts/Menu/MenuLabel";
import MenuDropDown from "@/components/Layouts/Menu/MenuDropDown";
import {IMenuLabel} from "./model/IMenuLabel";

export default function MenuItem({group, label, link, submenu}:
                                 { group: string, label: string, link: string, submenu: INavbar[] }) {
    const pathname = usePathname();
    const menuLabel: IMenuLabel = {link, pathname, group, label}
    const menuLabelIncludeSubmenu: IMenuLabel = {
        link,
        pathname,
        group,
        label,
        isIncludeSubMenu: true
    }

    return submenu.length == 0 ?
        <div className="nav-item x-navbar-item">
            <MenuLabel menuLabel={menuLabel}/>
        </div>
        :
        <li className="nav-item x-navbar-item">
            <MenuLabel menuLabel={menuLabelIncludeSubmenu}/>
            <MenuDropDown submenu={submenu} pathname={pathname} group={group}/>
        </li>
}