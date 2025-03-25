import {IPolicy} from "@/data/policy/model/IPolicy";

export const TermOfServiceDA: IPolicy = {
    title: "Servicevilkår",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Velkommen til CHORN-webstedet",
            description: "Disse servicevilkår (\"Vilkår\") regulerer brugen af dette websted (\"Websted\"). Ved at få adgang til eller bruge webstedet accepterer du disse vilkår. Hvis du ikke accepterer disse vilkår, bedes du stoppe med at bruge webstedet."
        },
        {
            title: "1. Brug af webstedet",
            description: "1.1 CHORN tilbyder en oversigt over teknisk ekspertise udelukkende til informationsformål. Oplysninger fra dette websted må ikke bruges til reference- eller andre formål uden tilladelse."
        },
        {
            title: "2. Intellektuel ejendomsret",
            description: "2.1 Alt indhold på webstedet, herunder tekst, grafik, logoer og billeder, tilhører CHORN eller dets indholdsleverandører og er beskyttet af lovgivning om intellektuel ejendomsret.",
            expand: "2.2 Indhold fra webstedet må ikke kopieres, distribueres, ændres eller på anden måde anvendes uden skriftlig tilladelse fra CHORN."
        },
        {
            title: "3. Ansvarsfraskrivelse",
            description: "3.1 Webstedet leveres på en \"som det er\" og \"som tilgængelig\" basis. CHORN giver ingen udtrykkelige eller underforståede garantier vedrørende webstedets drift eller de oplysninger, indhold eller materialer, der er inkluderet."
            ,
            expand: "3.2 CHORN garanterer ikke, at webstedet vil være uafbrudt, fejlfrit eller fri for skadelige komponenter."
        },
        {
            title: "4. Ansvarsbegrænsning",
            description: "4.1 I det omfang, det er tilladt ved lov, fraskriver CHORN sig ethvert ansvar for tab eller skader, der opstår som følge af brugen af webstedet."
            ,
            expand: "4.2 CHORN er ikke ansvarlig for direkte, indirekte, tilfældige, særlige eller følgeskader, der opstår som følge af brugen eller manglende evne til at bruge webstedet."
        },
        {
            title: "5. Ændringer i vilkårene",
            description: "5.1 Disse vilkår kan ændres til enhver tid. Ændringer træder i kraft straks efter offentliggørelse på webstedet. Fortsat brug af webstedet efter ændringer betyder, at du accepterer de opdaterede vilkår."
        }
    ],
};