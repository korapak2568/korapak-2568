import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLabel from "@/components/Layouts/Menu/MenuLabel";
import MenuLabelHorizontalLine from "@/components/Layouts/Menu/MenuLabelHorizontalLine";
import React from "react";
import {IMenuLabel} from "../model/IMenuLabel";

export default function MenuDropDown(
    {submenu, pathname, group}:
    {
        submenu: INavbar[],
        pathname: string,
        group: string
    }
) {
    return (
        <ul className="dropdown-menu x-navbar-dropdown">
            {submenu.map((subItem: INavbar, index) => {
                const subMenuLabel: IMenuLabel = {
                    link: subItem.link,
                    pathname,
                    group,
                    label: subItem.label,
                    isSubMenu: true
                }

                return subItem.isSeparated ?
                    <MenuLabelHorizontalLine key={index}/> :
                    <li key={index}>
                        <MenuLabel menuLabel={subMenuLabel}/>
                    </li>
            })}
        </ul>
    )
}