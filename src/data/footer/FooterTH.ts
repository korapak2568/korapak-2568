import {IFooter} from "@/data/footer/model/IFooter";

export const FooterTH: IFooter = {
    title: "ชอร์น",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN ติดตามข้อมูลล่าสุดเกี่ยวกับเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน การพัฒนาซอฟต์แวร์ เทคโนโลยีสารสนเทศสำหรับอุตสาหกรรมโดเมนธุรกิจต่างๆ และข้อมูลข่าวสารที่น่าสนใจ",
    importantTitle: "ลิงก์สำคัญ",
    featureTitle: "ความเชี่ยวชาญเทคนิค",
    infoTitle: "ข้อมูล",
    termOfService: {
        label: "เงื่อนไขการให้บริการ",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "นโยบายความเป็นส่วนตัว",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "นโยบายสถานที่ทำงาน",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "ติดตามเราบน GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "เชื่อมต่อกับเราบน LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "เกี่ยวกับ CHORN",
            link: "/about-chorn"
        },
        {
            label: "ความเชี่ยวชาญเทคนิค",
            link: "/technical-expertise/web-development"
        },
        {
            label: "เงื่อนไขการให้บริการ",
            link: "/terms-of-service"
        },
        {
            label: "นโยบายความเป็นส่วนตัว",
            link: "/privacy-policy"
        },
        {
            label: "นโยบายสถานที่ทำงาน",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "พัฒนาเว็บไซต์",
            link: "/technical-expertise/web-development"
        },
        {
            label: "การพัฒนาฝั่งหน้าบ้าน",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "การพัฒนาฝั่งหลังบ้าน",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "ปฏิบัติการพัฒนาบนคลาวด์",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "การผสาน LLM-AI กับ LINE",
            link: "/ai-companions/fah/",
        },
        {
            label: "การผสานเทคโนโลยี LLM-AI",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 บล็อกเชน",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "รูปแบบการทำงาน",
            linkText: "ระยะไกล ออฟฟิศ แบบผสม",
            link: "/",
            icon: "flaticon-speed hover-rotate",
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
};
