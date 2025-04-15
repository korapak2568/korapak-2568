import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLabel, {IMenuLabel} from "@/components/Layouts/Menu/MenuLabel";
import MenuLabelHorizontalLine from "@/components/Layouts/Menu/MenuLabelHorizontalLine";
import React from "react";
import {ITranslate} from "@/data/translate/model/ITranslate";

export default function MenuDropDown(
    {submenu, language, pathname, group}:
    {
        submenu: INavbar[],
        language: ITranslate,
        pathname: string,
        group: string
    }
) {
    return (
        <ul className="dropdown-menu">
            {submenu.map((subItem: INavbar, index) => {
                const subMenuLabel: IMenuLabel = {
                    language,
                    link: subItem.link,
                    pathname,
                    group,
                    label: subItem.label,
                    isSubMenu: true
                }

                return subItem.isSeparated ?
                    <MenuLabelHorizontalLine key={index}/> :
                    <li className="nav-item" key={index}>
                        <MenuLabel menuLabel={subMenuLabel}/>
                    </li>
            })}
        </ul>
    )
}