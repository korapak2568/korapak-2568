import React from "react";
import HomeFrontEndTop from "@/components/Common/HomeFrontEnd/HomeFrontEndTop";
import HomeFrontEndBottom from "@/components/Common/HomeFrontEnd/HomeFrontEndBottom";

export default function HomeFrontEndContainer({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area bg-fafafa pt-100 pb-70">
                <div className="container">
                    <HomeFrontEndTop lang={lang}/>
                    <HomeFrontEndBottom lang={lang}/>
                </div>
            </div>
        </>
    );
};