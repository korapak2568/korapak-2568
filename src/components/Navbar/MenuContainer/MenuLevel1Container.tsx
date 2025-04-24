import React from "react";
import Navbar1 from "@/components/Navbar/Menu/Navbar1";
import {INavbar} from "@/data/navbar/model/INavbar";

export default function MenuLevel1Container({navbar1}: { navbar1: INavbar }) {
    return (
        <div className="nav-item x-navbar-item">
            <Navbar1 navbar1={navbar1}/>
        </div>
    )
}