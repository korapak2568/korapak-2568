import React from "react";
import MenuLabel1 from "@/components/Navbar/Menu/MenuLabel1";
import {IMenuLabel} from "@/components/Navbar/model/IMenuLabel";

export default function MenuLevel1Container({menuLabel}: { menuLabel: IMenuLabel }) {
    return (
        <div className="nav-item x-navbar-item">
            <MenuLabel1 menuLabel={menuLabel}/>
        </div>
    )
}