// src/food/component/layouts/DesktopLayout.tsx

import '@/template/style/desktop/layout-desktop.scss'
import React from 'react'

export default function DesktopLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="desktop-container">
            <header className="desktop-navbar">
                <div className="desktop-navbar-container">
                    <div className="logo">
                        CHORN Food App
                    </div>
                    <nav>
                        <a href="/food">Home</a>
                        <a href="/food/orders">Orders</a>
                        <a href="/food/account">Account</a>
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