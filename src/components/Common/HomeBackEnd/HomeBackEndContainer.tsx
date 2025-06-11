import React from "react";
import HomeBackEndTop from "@/components/Common/HomeBackEnd/HomeBackEndTop";
import HomeBackEndIcon from "@/components/Common/HomeBackEnd/HomeBackEndIcon";
import HomeBackEndBottom from "@/components/Common/HomeBackEnd/HomeBackEndBottom";

export default function HomeBackEndContainer({lang, isRemoveTopSpace = false}: {
    lang: string,
    isRemoveTopSpace?: boolean
}) {
    const classes = isRemoveTopSpace ? "digital-experience-area" : "digital-experience-area ptb-100";

    return (
        <>
            <div className={`${classes}`}>
                <div className="container">
                    <HomeBackEndTop lang={lang}/>
                    <HomeBackEndIcon lang={lang}/>
                    <HomeBackEndBottom lang={lang}/>
                </div>
            </div>
        </>
    );
};