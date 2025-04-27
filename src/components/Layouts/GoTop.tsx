'use client';

import {useEffect, useState} from 'react';

export default function GoTop() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        const container = document.querySelector('.main-container');
        if (container) {
            container.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const container = document.querySelector('.main-container');

        if (!container) return;

        const handleScroll = () => {
            if (container.scrollTop > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <i className="bx bx-up-arrow-alt"></i>
                </div>
            )}
        </>
    );
}