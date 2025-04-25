import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLabelHorizontalLine from "@/components/Navbar/MenuItem/MenuLabelHorizontalLine";
import React from "react";
import MenuItemNavbar2 from "@/components/Navbar/MenuItem/MenuItemNavbar2";

export default function MenuLevel2Dropdown({lang, navbar1}: { lang: string, navbar1: INavbar }) {
    return (
        <ul className="x-navbar-dropdown">
            {navbar1.submenu.map((navbar2: INavbar, index) => {
                return navbar2.isSeparated ?
                    <MenuLabelHorizontalLine key={index}/> :
                    <li key={index}>
                        <MenuItemNavbar2 lang={lang} navbar2={navbar2}/>
                    </li>
            })}
        </ul>
    )
}