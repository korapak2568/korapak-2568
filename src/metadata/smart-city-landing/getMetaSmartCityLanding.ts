// src/metadata/smart-city-landing/getMetaSmartCityLanding.ts

import {Metadata} from "next";
import {withLocalizedAlternates} from "@/lib/metadata/alternates";
import {
    MetaWhenHumanLifeShapesTheCity
} from "@/metadata/smart-city-landing/when-human-life-shapes-the-city/MetaWhenHumanLifeShapesTheCity";
import {
    MetaHumanDailyFlowMorning
} from "@/metadata/smart-city-landing/human-daily-flow-morning/MetaHumanDailyFlowMorning";
import {MetaHumanDailyFlowMidday} from "@/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMidday";
import {
    MetaHumanDailyFlowEvening
} from "@/metadata/smart-city-landing/human-daily-flow-evening/MetaHumanDailyFlowEvening";
import {
    MetaFromLocalLifeToGlobalPattern
} from "@/metadata/smart-city-landing/from-local-life-to-global-pattern/MetaFromLocalLifeToGlobalPattern";
import {
    MetaMobilityPredictableMovement
} from "@/metadata/smart-city-landing/mobility-focus-predictable-movement/MetaMobilityPredictableMovement";
import {
    MetaMobilityMixedMobility
} from "@/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobility";
import {
    MetaCitySystemsMovementAndPause
} from "@/metadata/smart-city-landing/city-systems-movement-and-pause/MetaCitySystemsMovementAndPause";
import {
    MetaCitySystemsDensityAndComfort
} from "@/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfort";
import {
    MetaCitySystemsEfficiencyAndRhythm
} from "@/metadata/smart-city-landing/city-systems-efficiency-and-rhythm/MetaCitySystemsEfficiencyAndRhythm";
import {
    MetaGlobalPatternsPredictableSharedStreet
} from "@/metadata/smart-city-landing/global-patterns-predictable-shared-street/MetaGlobalPatternsPredictableSharedStreet";
import {
    MetaGlobalPatternsMixedMobilityCoexistence
} from "@/metadata/smart-city-landing/global-patterns-mixed-mobility-coexistence/MetaGlobalPatternsMixedMobilityCoexistence";
import {
    MetaGlobalPatternsUrbanLogistics
} from "@/metadata/smart-city-landing/global-patterns-urban-logistics/MetaGlobalPatternsUrbanLogistics";
import {
    MetaUrbanSignalsPredictableStreet
} from "@/metadata/smart-city-landing/urban-signals-predictable-street/MetaUrbanSignalsPredictableStreet";
import {
    MetaUrbanSignalsLogisticsIntegration
} from "@/metadata/smart-city-landing/urban-signals-logistics-integration/MetaUrbanSignalsLogisticsIntegration";
import {
    MetaUrbanSignalsPublicSpaceUse
} from "@/metadata/smart-city-landing/urban-signals-public-space-use/MetaUrbanSignalsPublicSpaceUse";
import {
    MetaEditorialHumanFirstObservation
} from "@/metadata/smart-city-landing/editorial-human-first-observation/MetaEditorialHumanFirstObservation";
import {
    MetaEditorialLocalAsGlobalPrototype
} from "@/metadata/smart-city-landing/editorial-local-as-global-prototype/MetaEditorialLocalAsGlobalPrototype";
import {
    MetaEditorialSystemBeforeTechnology
} from "@/metadata/smart-city-landing/editorial-system-before-technology/MetaEditorialSystemBeforeTechnology";

export function getMetaSmartCityLanding(
    {lang}: { lang: string }
): Record<string, Metadata> {

    return {
        "when-human-life-shapes-the-city": withLocalizedAlternates(MetaWhenHumanLifeShapesTheCity[lang] ?? MetaWhenHumanLifeShapesTheCity.en ?? {}, "/smart-city/when-human-life-shapes-the-city/"),

        // human daily flow morning
        "human-daily-flow-morning": withLocalizedAlternates(MetaHumanDailyFlowMorning[lang] ?? MetaHumanDailyFlowMorning.en ?? {}, "/smart-city/human-daily-flow-morning/"),
        "human-daily-flow-midday": withLocalizedAlternates(MetaHumanDailyFlowMidday[lang] ?? MetaHumanDailyFlowMidday.en ?? {}, "/smart-city/human-daily-flow-midday/"),
        "human-daily-flow-evening": withLocalizedAlternates(MetaHumanDailyFlowEvening[lang] ?? MetaHumanDailyFlowEvening.en ?? {}, "/smart-city/human-daily-flow-evening/"),

        // from local life to global pattern
        "from-local-life-to-global-pattern": withLocalizedAlternates(MetaFromLocalLifeToGlobalPattern[lang] ?? MetaFromLocalLifeToGlobalPattern.en ?? {}, "/smart-city/from-local-life-to-global-pattern/"),

        // mobility fucus
        "mobility-focus-predictable-movement": withLocalizedAlternates(MetaMobilityPredictableMovement[lang] ?? MetaMobilityPredictableMovement.en ?? {}, "/smart-city/mobility-focus-predictable-movement/"),
        "mobility-focus-mixed-mobility": withLocalizedAlternates(MetaMobilityMixedMobility[lang] ?? MetaMobilityMixedMobility.en ?? {}, "/smart-city/mobility-focus-mixed-mobility/"),

        // city systems landings
        "city-systems-movement-and-pause": withLocalizedAlternates(MetaCitySystemsMovementAndPause[lang] ?? MetaCitySystemsMovementAndPause.en ?? {}, "/smart-city/city-systems-movement-and-pause/"),
        "city-systems-density-and-comfort": withLocalizedAlternates(MetaCitySystemsDensityAndComfort[lang] ?? MetaCitySystemsDensityAndComfort.en ?? {}, "/smart-city/city-systems-density-and-comfort/"),
        "city-systems-efficiency-and-rhythm": withLocalizedAlternates(MetaCitySystemsEfficiencyAndRhythm[lang] ?? MetaCitySystemsEfficiencyAndRhythm.en ?? {}, "/smart-city/city-systems-efficiency-and-rhythm/"),

        // global patterns landings
        "global-patterns-predictable-shared-street": withLocalizedAlternates(MetaGlobalPatternsPredictableSharedStreet[lang] ?? MetaGlobalPatternsPredictableSharedStreet.en ?? {}, "/smart-city/global-patterns-predictable-shared-street/"),
        "global-patterns-mixed-mobility-coexistence": withLocalizedAlternates(MetaGlobalPatternsMixedMobilityCoexistence[lang] ?? MetaGlobalPatternsMixedMobilityCoexistence.en ?? {}, "/smart-city/global-patterns-mixed-mobility-coexistence/"),
        "global-patterns-urban-logistics": withLocalizedAlternates(MetaGlobalPatternsUrbanLogistics[lang] ?? MetaGlobalPatternsUrbanLogistics.en ?? {}, "/smart-city/global-patterns-urban-logistics/"),

        // urban signals landings
        "urban-signals-predictable-street": withLocalizedAlternates(MetaUrbanSignalsPredictableStreet[lang] ?? MetaUrbanSignalsPredictableStreet.en ?? {}, "/smart-city/urban-signals-predictable-street/"),
        "urban-signals-logistics-integration": withLocalizedAlternates(MetaUrbanSignalsLogisticsIntegration[lang] ?? MetaUrbanSignalsLogisticsIntegration.en ?? {}, "/smart-city/urban-signals-logistics-integration/"),
        "urban-signals-public-space-use": withLocalizedAlternates(MetaUrbanSignalsPublicSpaceUse[lang] ?? MetaUrbanSignalsPublicSpaceUse.en ?? {}, "/smart-city/urban-signals-public-space-use/"),

        // editorial positioning landings
        "editorial-human-first-observation": withLocalizedAlternates(MetaEditorialHumanFirstObservation[lang] ?? MetaEditorialHumanFirstObservation.en ?? {}, "/smart-city/editorial-human-first-observation/"),
        "editorial-system-before-technology": withLocalizedAlternates(MetaEditorialSystemBeforeTechnology[lang] ?? MetaEditorialSystemBeforeTechnology.en ?? {}, "/smart-city/editorial-system-before-technology/"),
        "editorial-local-as-global-prototype": withLocalizedAlternates(MetaEditorialLocalAsGlobalPrototype[lang] ?? MetaEditorialLocalAsGlobalPrototype.en ?? {}, "/smart-city/editorial-local-as-global-prototype/"),
    };
}