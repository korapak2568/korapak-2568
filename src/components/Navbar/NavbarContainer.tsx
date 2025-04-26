import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import LanguageButton from "@/components/Navbar/LanguageButton";
import HamburgerButton from "@/components/Navbar/HamburgerButton";
import MenuContainer from "@/components/Navbar/MenuContainer";

export default function NavbarContainer({lang}: { lang: string }) {
    return (
        <div id="navbar" className="navbar-area navbar-container">
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/" className="navbar-brand add-navbar-logo">
                            <Image
                                src={ImageUrl.logo.rec.sm.path}
                                alt={ImageUrl.logo.rec.sm.title}
                                width={150}
                                height={75}
                            />
                        </Link>

                        <LanguageButton lang={lang}/>
                        <HamburgerButton/>
                        <MenuContainer lang={lang}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}