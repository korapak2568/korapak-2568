import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLevel1Container from "@/components/Navbar/MenuLevelContainer/MenuLevel1Container";
import MenuLevel2Container from "./MenuLevel2Container";

export default function MenuLevelContainer(
    {lang, pathname, navbar1}:
    { lang: string, pathname: string, navbar1: INavbar }) {
    return navbar1.isSubmenu ?
        <MenuLevel2Container lang={lang} pathname={pathname} navbar1={navbar1}/> :
        <MenuLevel1Container lang={lang} pathname={pathname} navbar1={navbar1}/>
}