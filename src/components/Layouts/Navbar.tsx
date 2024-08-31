"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import {menus} from "../../../libs/menus";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const Navbar: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);
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
    });

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
                            <Link href="/" className="navbar-brand">
                                <Image
                                    src="/chorn-images/logo.png"
                                    alt="logo"
                                    width={150}
                                    height={31}
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
                                    {menus.map((menuItem) => (
                                        <MenuItem key={menuItem.label} {...menuItem} />
                                    ))}
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center mt-10">
                                {/*<div className="option-item">*/}
                                {/*    <i*/}
                                {/*        className="search-btn flaticon-loupe"*/}
                                {/*        onClick={handleToggleSearchModal}*/}
                                {/*    ></i>*/}
                                {/*</div>*/}

                                <div className="option-item">
                                    <Link href="/contact-chorn" className="default-btn">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div
                className={`search-overlay ${
                    isActiveSearchModal ? "" : "search-overlay-active"
                }`}
            >
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div
                            className="search-overlay-close"
                            onClick={handleToggleSearchModal}
                        >
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input
                                    type="text"
                                    className="input-search"
                                    placeholder="Search here..."
                                />
                                <button type="submit">
                                    <i className="bx bx-search-alt"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
};

export default Navbar;
