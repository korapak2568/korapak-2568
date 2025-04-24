"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";
import MenuLevel1Container from "@/components/Navbar/MenuContainer/MenuLevel1Container";
import MenuLevel2Container from "./MenuLevel2Container";

export default function MenuContainer({group, label, link, submenu}:
                                      { group: string, label: string, link: string, submenu: INavbar[] }) {
    const menu1: IMenuLabel = {link, group, label}
    const menu2: IMenuLabel = {
        link,
        group,
        label,
        isIncludeSubMenu: true
    }

    return submenu.length == 0 ?
        <MenuLevel1Container menu1={menu1}/> :
        <MenuLevel2Container menu1={menu2} group={group} menu2={submenu}/>
}