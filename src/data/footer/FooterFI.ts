import {IFooter} from "@/data/footer/model/IFooter";

export const FooterFI: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN on innovaatiokumppanisi, joka toimittaa huippuluokan ohjelmistoratkaisuja, " +
        "skaalautuvia verkkosivustoja miljoonille käyttäjille ja tulevaisuutta varten valmiita erinomaisia ratkaisuja. " +
        "Kohota digitaalista läsnäoloasi kanssamme.",
    importantTitle: "Tärkeät linkit",
    featureTitle: "Tekninen asiantuntemus",
    infoTitle: "Tietoa",
    termOfService: {
        label: "Käyttöehdot",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Tietosuojakäytäntö",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Työpaikkakäytäntö",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Seuraa meitä GitHubissa"
        },
        {
            label: "Linked",
            link: "https://www.linkedin.com/in/khachornchit",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Ota yhteyttä LinkedInissä"
        }
    ],
    importantLinks: [
        {
            label: "Tietoa CHORN:ista",
            link: "/about-chorn"
        },
        {
            label: "Tekninen asiantuntemus",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Käyttöehdot",
            link: "/terms-of-service"
        },
        {
            label: "Tietosuojakäytäntö",
            link: "/privacy-policy"
        },
        {
            label: "Työpaikkakäytäntö",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Verkkokehitys",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Front End -kehitys",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End & API -kehitys",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps ja pilvipalvelut",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/AI LINE -keskusteluystävä",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM/AI-konsultti",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 ja älysopimukset",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Työmallit",
            linkText: "Etätyö, toimisto, hybridi",
            link: "/",
            icon: "flaticon-speed hover-rotate", // Represents work or career
        },
        {
            label: "Palvelumallit",
            linkText: "Vakituinen, määräaikainen, projektipohjainen",
            link: "/",
            icon: "flaticon-connection hover-rotate", // Represents flexibility and service customization
        },
    ],
}