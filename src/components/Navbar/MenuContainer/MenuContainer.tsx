"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";
import MenuLevel1Container from "@/components/Navbar/MenuContainer/MenuLevel1Container";
import MenuLevel2Container from "./MenuLevel2Container";

export default function MenuContainer({group, label, link, submenu}:
                                      { group: string, label: string, link: string, submenu: INavbar[] }) {
    const menuLabel1: IMenuLabel = {link, group, label}
    const menuLabel2: IMenuLabel = {
        link,
        group,
        label,
        isIncludeSubMenu: true
    }

    return submenu.length == 0 ?
        <MenuLevel1Container menuLabel={menuLabel1}/> :
        <MenuLevel2Container menuLabel={menuLabel2} group={group} submenu={submenu}/>
}