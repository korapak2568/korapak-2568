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
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Seuraa meitä GitHubissa"
        },
        {
            label: "Linked",
            link: "https://www.linkedin.com/company/chorn",
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
            label: "Back-End-kehitys",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps ja pilvipalvelut",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label:  "LLM-AI LINE-integraatio",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI-integraatio",
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
        }
    ],
    frontend: {
        title: "Front-End",
        items: [
            {
                label: "Next.js",
                link: '/technical-expertise/front-end-developer/nextjs-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "React.js",
                link: '/technical-expertise/front-end-developer/react-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "Vue.js",
                link: '/technical-expertise/front-end-developer/vue-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "Angular",
                link: '/technical-expertise/front-end-developer/angular-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "JavaScript",
                link: '/technical-expertise/front-end-developer/javascript-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "TypeScript",
                link: '/technical-expertise/front-end-developer/typescript-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "CSS3",
                link: '/technical-expertise/front-end-developer/css3-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "HTML5",
                link: '/technical-expertise/front-end-developer/html5-developer',
                icon: "flaticon-speed hover-rotate"
            },
        ]
    },
    backend: {
        title: "Back-End",
        items: [
            {
                label: "Java",
                link: '/technical-expertise/full-stack-developer/java-spring-boot-developer',
            },
            {
                label: "Node.js",
                link: '/technical-expertise/full-stack-developer/nodejs-developer',
            },
            {
                label: "Python",
                link: '/technical-expertise/full-stack-developer/python-developer',
            },
            {
                label: "Go",
                link: '/technical-expertise/full-stack-developer/go-developer',
            },
            {
                label: "PHP",
                link: '/technical-expertise/full-stack-developer/php-developer',
            },
            {
                label: "DotNet Core",
                link: '/technical-expertise/full-stack-developer/dotnetcore-developer',
            },
        ]
    },
    devops: {
        title: "DevOps",
        items: [
            {
                label: "Docker",
                link: '/technical-expertise/cloud-devops/docker',
            },
            {
                label: "Kubernetes",
                link: '/technical-expertise/cloud-devops/kubernetes',
            },
            {
                label: "GitHub",
                link: '/technical-expertise/cloud-devops/github',
            },
            {
                label: "GitLab",
                link: '/technical-expertise/cloud-devops/gitlab',
            }
        ]
    }
}