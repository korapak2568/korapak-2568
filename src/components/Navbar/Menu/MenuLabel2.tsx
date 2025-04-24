import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLabel1 from "@/components/Navbar/Menu/MenuLabel1";
import MenuLabelHorizontalLine from "@/components/Navbar/Menu/MenuLabelHorizontalLine";
import React from "react";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";

export default function MenuLabel2(
    {menu2, group}: { menu2: INavbar[], group: string }
) {
    return <ul className="dropdown-menu x-navbar-dropdown">
        {menu2.map((subItem: INavbar, index) => {
            const subMenuLabel: IMenuLabel = {
                link: subItem.link,
                group,
                label: subItem.label,
                isSubMenu: true
            }

            return subItem.isSeparated ?
                <MenuLabelHorizontalLine key={index}/> :
                <li key={index}>
                    <MenuLabel1 menuLabel={subMenuLabel}/>
                </li>
        })}
    </ul>
}