// src/food/component/layouts/MobileLayout.tsx

import '@/food/style/mobile/layout-mobile.scss'
import { Home, Search, ShoppingCart, User, Menu } from 'lucide-react'

export default function MobileLayout({ children }: { children: React.ReactNode }) {
    const navItems = [
        { icon: <Home />, label: 'Home' },
        { icon: <Search />, label: 'Search' },
        { icon: <ShoppingCart />, label: 'Cart' },
        { icon: <User />, label: 'Account' },
        { icon: <Menu />, label: 'More' },
    ]

    return (
        <div className="mobile-container">
            <main className="mobile-main">{children}</main>

            <nav className="mobile-bottom-nav">
                {navItems.map((item, index) => (
                    <button key={index}>
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    )
}