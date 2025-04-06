import {INavbar} from "@/data/navbar/model/INavbar";

export const NavbarTH: INavbar[] = [
    {
        group: "/info",
        label: "หน้าแรก",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "ความเชี่ยวชาญเทคนิค",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "การพัฒนาเว็บแอพพลิเคชั่น",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การพัฒนาฝั่งหน้าบ้าน",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การพัฒนาฝั่งหลังบ้าน",
                link: "/technical-expertise/full-stack-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "เพื่อนคุยไลน์กับแบบจำลองขนาดใหญ่",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การเชื่อมต่อกับแบบจำลองขนาดใหญ่",
                link: "/technical-expertise/ai-solutions/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "เว็บ ๓ บล็อกเชน",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "ปฏิบัตการพัฒนาบนคลาวด์",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "โครงสร้างพื้นฐานคลาวด์",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "แกลเลอรี่",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "เกี่ยวกับ",
        link: "/about-chorn/",
        submenu: [],
    },
];