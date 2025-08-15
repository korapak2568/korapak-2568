// src/food/component/layouts/DesktopLayout.tsx

import '@/food/style/desktop/layout-desktop.scss'
import React from 'react'
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import Link from "next/link";

export default function DesktopLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="desktop-container">
            <header className="desktop-navbar">
                <div className="desktop-navbar-container">
                    <div className="logo">
                        <Link href="/" className="">
                            <Image
                                src={ImageUrl.logo.whiteRec.sm.path}
                                alt={ImageUrl.logo.whiteRec.sm.title}
                                width={100}
                                height={50}
                            />
                        </Link>
                    </div>
                    <nav>
                        <a href="/food">หน้าแรก</a>
                        <a href="/food/orders">ตะกร้าอาหาร</a>
                        <a href="/food/account">สมาชิก</a>
                    </nav>
                </div>
            </header>

            <main className="desktop-main">
                <div className="desktop-main-container">
                    {children}
                </div>
            </main>

            <footer className="desktop-footer">
                <div className="desktop-footer-container">
                    © 2025 CHORN Food App Inc. All rights reserved.
                </div>
            </footer>
        </div>
    )
}