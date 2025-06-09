import {Contact2025} from "@/data/contact/Contact2025";
import React from "react";
import {FaEnvelope, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";

export default function BottomImageSingle({lang}: { lang: string }) {
    const location: Record<string, string> = {
        en: "Office: Sansai, Chiang Mai, Thailand",
        th: "ออฟฟิศ: สันทราย เชียงใหม่ ประเทศไทย",
    }

    const tel: Record<string, string> = {
        en: "Tel: +66 (52) 000 548, +66 (64) 918 1998",
        th: "โทรศัพท์: 052-000 548, 064-918 1998",
    }

    return (
        <div className="social single-row">
            <div className="left-row">
                <div className="icon">
                    <FaEnvelope/>
                </div>
                <p>
                    Project Manager: pm@chorn.in.th
                </p>
            </div>
            <div className="left-row">
                <div className="icon">
                    <FaEnvelope/>
                </div>
                <p>
                    HR: hr@chorn.in.th, CTO: cto@chorn.in.th
                </p>
            </div>
            <div className="left-row">
                <div className="icon">
                    <FaPhoneAlt/>
                </div>
                <div className="linkedin-text">
                    {lang == 'th' ? tel[lang] : tel['en']}
                </div>
            </div>
            <div className="left-row">
                <div className="icon">
                    <FaMapMarkedAlt/>
                </div>
                <div className="linkedin-text">
                    <a href={Contact2025.location.link}
                       target="_blank"
                    >
                        {lang == 'th' ? location[lang] : location['en']}
                    </a>
                </div>
            </div>
        </div>
    )
}