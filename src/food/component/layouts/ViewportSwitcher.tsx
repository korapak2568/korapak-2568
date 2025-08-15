'use client'

import {useEffect, useState} from 'react'
import MobileLayout from '@/food/component/layouts/MobileLayout'
import DesktopLayout from '@/food/component/layouts/DesktopLayout'

export default function ViewportSwitcher({children}: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const updateSize = () => setIsMobile(window.innerWidth < 768)
        updateSize()

        window.addEventListener('resize', updateSize)
        setMounted(true)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    if (!mounted) return null

    return isMobile ? <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>
}