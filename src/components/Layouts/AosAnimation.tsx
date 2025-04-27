'use client';

import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosAnimation() {
    useEffect(() => {
        AOS.init({
            once: true, // (optional) animations happen only once
            duration: 800, // (optional) default duration
        });
    }, []);

    return null; // No need to render an empty div
}