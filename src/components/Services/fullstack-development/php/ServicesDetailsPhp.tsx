import React from "react";
import {IFullStackStack} from "@/lib/model/IFullStack";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import FullStackServiceDetails from "@/components/Services/fullstack-development/FullStackServiceDetails";

export default function ServicesDetailsPhp({lang, stack, frontEnd, fullStack}: { lang: string, stack: IFullStackStack, frontEnd: IFrontEnd, fullStack: IFullStack }) {
    return (
        <FullStackServiceDetails
            lang={lang}
            stack={stack}
            frontEnd={frontEnd}
            fullStack={fullStack}
        />
    );
}
