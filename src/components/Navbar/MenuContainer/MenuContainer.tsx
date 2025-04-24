"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLevel1Container from "@/components/Navbar/MenuContainer/MenuLevel1Container";
import MenuLevel2Container from "./MenuLevel2Container";

export default function MenuContainer({navbar1}: { navbar1: INavbar }) {
    return navbar1.isSubmenu ?
        <MenuLevel2Container navbar1={navbar1}/> : <MenuLevel1Container navbar1={navbar1}/>
}