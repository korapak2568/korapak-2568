import {INavbar} from "@/data/navbar/model/INavbar";
import Navbar1 from "@/components/Navbar/Menu/Navbar1";
import MenuLabelHorizontalLine from "@/components/Navbar/Menu/MenuLabelHorizontalLine";
import React from "react";

export default function Navbar2({navbar1}: { navbar1: INavbar }) {
    return <ul className="dropdown-menu x-navbar-dropdown">
        {navbar1.submenu.map((navbar2: INavbar, index) => {
            return navbar2.isSeparated ?
                <MenuLabelHorizontalLine key={index}/> :
                <li key={index}>
                    <Navbar1 navbar1={navbar1} navbar2={navbar2}/>
                </li>
        })}
    </ul>
}