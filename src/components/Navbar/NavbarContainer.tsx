import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import LanguageButton from "@/components/Navbar/LanguageButton";
import HamburgerButton from "@/components/Navbar/HamburgerButton";
import DesktopNavbarContainer from "@/components/Navbar/DesktopNavbarContainer";

export default function NavbarContainer({lang}: { lang: string }) {
    return (
        <div id="navbar" className="navbar-area navbar-container">
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/" className="navbar-brand add-navbar-logo">
                            <Image
                                src={ImageUrl.logo.whiteRec.sm.path}
                                alt={ImageUrl.logo.whiteRec.sm.title}
                                width={150}
                                height={75}
                            />
                        </Link>

                        <LanguageButton lang={lang}/>
                        <HamburgerButton/>
                        <DesktopNavbarContainer lang={lang}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}