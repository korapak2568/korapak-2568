import React from "react";
import MenuLabel1 from "@/components/Navbar/Menu/MenuLabel1";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";
import MenuLabel2 from "@/components/Navbar/Menu/MenuLabel2";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuLevel2Container(
    {menuLabel, group, submenu}: { menuLabel: IMenuLabel, group: string, submenu: INavbar[] },) {
    return (
        <li className="nav-item x-navbar-item">
            <MenuLabel1 menuLabel={menuLabel}/>
            <MenuLabel2 submenu={submenu} group={group}/>
        </li>
    )
}