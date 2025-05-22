import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLevel1 from "./MenuLevel1";
import MenuLevel2 from "./MenuLevel2";

export default function MenuLevelContainer(
    {lang, pathname, navbar1}:
    { lang: string, pathname: string, navbar1: INavbar }) {
    return navbar1.isSubmenu ?
        <MenuLevel2 lang={lang} pathname={pathname} navbar1={navbar1}/> :
        <MenuLevel1 lang={lang} pathname={pathname} navbar1={navbar1}/>
}