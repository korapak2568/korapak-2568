import React from "react";
import {MainShape} from "@/components/Shape/MainShape";
import HomeWorkspaceSlice from "@/components/Home/HomeWorkspaceSlice";

export default function HomeWorkspace({lang}: { lang: string }) {
    return (
        <>
            <div className="home-wrapper-area">
                <HomeWorkspaceSlice lang={lang}/>
                <MainShape/>
            </div>
        </>
    );
};