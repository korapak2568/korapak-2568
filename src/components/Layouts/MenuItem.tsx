"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/model/navbar/INavbar";

interface MenuItemProps {
    label: string;
    link: string;
    submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({label, link, submenu}) => {
    const pathname = usePathname();
    const isActive = pathname == link;

    if (submenu) {
        return (
            <li className="nav-item" key={label}>
                <Link
                    href={link}
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                >
                    {label} <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                    {submenu.map((subItem: INavbar, index) => {
                        const isActive = pathname == subItem.link;

                        if (subItem.isSeparated) {
                            return (
                                <li className="nav-item" key={index}>
                                    <div className="add-underline"/>
                                </li>
                            );
                        }

                        return (
                            <li className="nav-item" key={index}>
                                <Link
                                    href={subItem.link}
                                    className={`nav-link ${isActive ? "active" : ""}`}
                                >
                                    {subItem.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }

    return (
        <li className="nav-item" key={label}>
            <Link href={link} className={`nav-link ${isActive ? "active" : ""}`}>
                {label}
            </Link>
        </li>
    );
};

export default MenuItem;
