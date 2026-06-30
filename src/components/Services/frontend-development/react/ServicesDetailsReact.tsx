import React from "react";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import FrontEndServiceDetails from "@/components/Services/frontend-development/FrontEndServiceDetails";

export default function ServicesDetailsReact({lang, stack, frontEnd, fullStack}: { lang: string, stack: IFrontEndStack, frontEnd: IFrontEnd, fullStack: IFullStack }) {
    return (
        <FrontEndServiceDetails
            lang={lang}
            stack={stack}
        frontEnd={frontEnd}
            fullStack={fullStack}
        />
    );
}
