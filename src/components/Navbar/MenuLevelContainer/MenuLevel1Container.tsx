import React from "react";
import MenuItemNavbar1 from "@/components/Navbar/MenuItem/MenuItemNavbar1";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuLevel1Container({lang, navbar1}: { lang: string, navbar1: INavbar }) {
    return (
        <div className="x-navbar-item">
            <MenuItemNavbar1 lang={lang} navbar1={navbar1}/>
        </div>
    )
}