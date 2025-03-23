import {IFeature} from "@/data/feature/model/IFeature";

export const FeatureFI: IFeature = {
    title: "Verkkosivuston kehityksen yleiskatsaus",
    span: "Järjestelmäanalyysi ja ohjelmistokehitys",
    subTitle: "",
    stacks: [
        {
            title: "Front End -kehitys",
            description: "UI-kehykset ja kirjastot kuten React, Next.js, Angular, Vue, " +
                "sekä TypeScript, JavaScript, HTML3 ja CSS3.",
            link: "/technical-expertise/front-end-developer/",
            icon: "bx bx-code-alt"
        },
        {
            title: "Back End -kehitys",
            description: "Kokemus palvelinpuolen teknologioista, mukaan lukien Node.js, Java, Spring Boot, Go, PHP ja Python, skaalautuvien ja tehokkaiden back-end-järjestelmien rakentamiseen.",
            link: "/technical-expertise/full-stack-developer/",
            icon: "bx bx-server"
        },
        {
            title: "Web API -kehitys",
            description: "Päästä päähän verkkokehitysratkaisut käyttäen moderneja teknologioita kuten Node.js, Java, Spring Boot, Go, PHP ja Python dynaamisten ja responsiivisten verkkosivustojen luomiseen.",
            link: "/technical-expertise/web-development/",
            icon: "bx bx-globe"
        },
        {
            title: "Web3 & Lohkoketju",
            description: "Kokemus huippuluokan teknologioista kuten lohkoketju, hajautettu rahoitus (DeFi), älysopimukset ja Web3, varmistaen että rahoituksen tekninen asiantuntemus pysyy kehityksen kärjessä.",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
            icon: "bx bx-coin-stack"
        }
    ],
}
