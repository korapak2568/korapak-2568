// src/metadata/smart-city-landing/getMetaSmartCityLanding.ts

import {Metadata} from "next";
import {withLocalizedAlternates} from "@/lib/metadata/alternates";
import {MetaLiteBeneathTheRoute} from "@/metadata/smart-city/chiang-mai/MetaLiteBeneathTheRoute";
import {MetaPlazaThatConnectsTheHub} from "@/metadata/smart-city/chiang-mai/MetaPlazaThatConnectsTheHub";
import {MetaVertiportReflectedInWater} from "@/metadata/smart-city/chiang-mai/MetaVertiportReflectedInWater";
import {
    MetaWhenHumanFlowAlignsWithSystemFlow
} from "@/metadata/smart-city/chiang-mai/MetaWhenHumanFlowAlignsWithSystemFlow";
import {MetaTheCityInBalance} from "@/metadata/smart-city/chiang-mai/MetaTheCityInBalance";

export function getMetaSmartCity(
    {lang}: { lang: string }
): Record<string, Metadata> {

    return {
        "life-beneath-the-route": withLocalizedAlternates(MetaLiteBeneathTheRoute[lang] ?? MetaLiteBeneathTheRoute.en ?? {}, "/smart-city/chiang-mai/life-beneath-the-route/"),
        "plaza-that-connects-the-hub": withLocalizedAlternates(MetaPlazaThatConnectsTheHub[lang] ?? MetaPlazaThatConnectsTheHub.en ?? {}, "/smart-city/chiang-mai/plaza-that-connects-the-hub/"),
        "vertiport-reflected-in-water": withLocalizedAlternates(MetaVertiportReflectedInWater[lang] ?? MetaVertiportReflectedInWater.en ?? {}, "/smart-city/chiang-mai/vertiport-reflected-in-water/"),
        "when-human-flow-aligns-with-system-flow": withLocalizedAlternates(MetaWhenHumanFlowAlignsWithSystemFlow[lang] ?? MetaWhenHumanFlowAlignsWithSystemFlow.en ?? {}, "/smart-city/chiang-mai/when-human-flow-aligns-with-system-flow/"),
        "the-city-in-balance": withLocalizedAlternates(MetaTheCityInBalance[lang] ?? MetaTheCityInBalance.en ?? {}, "/smart-city/chiang-mai/the-city-in-balance/"),
    };
}