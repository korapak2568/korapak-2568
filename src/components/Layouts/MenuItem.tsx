import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {INavbar} from "@/data/navbar/model/INavbar";
import {isActiveMainMenu, isActiveSubMenu} from "@/lib/utils";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const MenuItem: React.FC<INavbar> = ({group, label, link, submenu}) => {
    const pathname = usePathname();
    const locale = useLocale()

    const saveClickedLinked = (group: string) => {
        localStorage.setItem("group", group)
    }

    return submenu.length == 0 ?
        <li className="nav-item" key={label}>
            <Link href={'/' + locale.value + link}
                  className={`nav-link ${isActiveMainMenu(pathname, group) ? "active add-navbar-active" : ""}`}
                  onClick={() => saveClickedLinked(group)}
            >
                {label}
            </Link>
        </li>
        :
        <>
            <li className="nav-item" key={label}>
                <Link
                    href={'/' + locale.value + link}
                    className={`nav-link ${isActiveMainMenu(pathname, group) ? "active add-navbar-active" : ""}`}
                    onClick={() => saveClickedLinked(group)}
                >
                    {label} <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                    {submenu.map((subItem: INavbar, index) => (
                        subItem.isSeparated ?
                            (
                                <li className="nav-item" key={index}>
                                    <div className="add-underline"/>
                                </li>
                            ) :
                            (
                                <li className="nav-item" key={index}>
                                    <Link
                                        href={'/' + locale.value + subItem.link}
                                        className={`nav-link ${isActiveSubMenu(pathname, '/' + locale.value + subItem.link) ? "active add-navbar-active" : ""}`}
                                        onClick={() => saveClickedLinked(group)}
                                    >
                                        {subItem.label}
                                    </Link>
                                </li>
                            )
                    ))}
                </ul>
            </li>
        </>
};

export default MenuItem;
