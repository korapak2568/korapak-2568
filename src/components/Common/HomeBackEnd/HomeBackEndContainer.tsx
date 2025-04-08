import React from "react";
import HomeBackEndTop from "@/components/Common/HomeBackEnd/HomeBackEndTop";
import HomeBackEndIcon from "@/components/Common/HomeBackEnd/HomeBackEndIcon";
import HomeBackEndBottom from "@/components/Common/HomeBackEnd/HomeBackEndBottom";

export default function HomeBackEndContainer({lang}: { lang: string }) {
    return (
        <>
            <div className="digital-experience-area ptb-100">
                <div className="container">
                    <HomeBackEndTop lang={lang}/>
                    <HomeBackEndIcon lang={lang}/>
                    <HomeBackEndBottom lang={lang}/>
                </div>
            </div>
        </>
    );
};