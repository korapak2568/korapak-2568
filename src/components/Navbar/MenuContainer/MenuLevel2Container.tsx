import React from "react";
import MenuLabel1 from "@/components/Navbar/Menu/MenuLabel1";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";
import MenuLabel2 from "@/components/Navbar/Menu/MenuLabel2";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuLevel2Container(
    {menu1, group, menu2}: { menu1: IMenuLabel, group: string, menu2: INavbar[] },) {
    return (
        <li className="nav-item x-navbar-item">
            <MenuLabel1 menuLabel={menu1}/>
            <MenuLabel2 menu2={menu2} group={group}/>
        </li>
    )
}