"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import {NAVBAR} from "@/data/navbar/NAVBAR";
import {INavbar} from "@/data/model/navbar/INavbar";
import {Info} from "@/data/info/Info";

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState(true);
    const toggleNavbar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId?.classList.add("is-sticky");
            } else {
                elementId?.classList.remove("is-sticky");
            }
        });
    }, []);

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState(true);
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = menu
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = menu
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/" className="navbar-brand add-navbar-logo">
                                <Image
                                    src={Info.Images.logo.darker.rec.sm.path}
                                    alt={Info.Images.logo.darker.rec.sm.title}
                                    width={150}
                                    height={75}
                                />
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    {NAVBAR.map((menuItem: INavbar, index) => (
                                        <MenuItem key={index} {...menuItem} />
                                    ))}
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center mt-10">
                                <div className={'mr-10'}>
                                    <a href={Info.Contact.line.link}>
                                        <Image
                                            src={Info.Contact.line.iconImageLink}
                                            alt="เพิ่มเพื่อน"
                                            width={120}
                                            height={36}
                                        />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
