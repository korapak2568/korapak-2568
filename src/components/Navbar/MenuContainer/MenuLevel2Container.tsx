import React from "react";
import Navbar1 from "@/components/Navbar/Menu/Navbar1";
import Navbar2 from "@/components/Navbar/Menu/Navbar2";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuLevel2Container({navbar1}: { navbar1: INavbar }) {
    return (
        <li className="nav-item x-navbar-item">
            <Navbar1 navbar1={navbar1}/>
            <Navbar2 navbar1={navbar1}/>
        </li>
    )
}