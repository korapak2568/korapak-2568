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
                label: "การพัฒนาเว็บไซต์และเอพีไอ",
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
                label: "การพัฒนาฝั่งหลังบ้านและเอเพีไอ",
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
                label: "เพื่อนคุยเอไอไลน์ด้วยแบบจำลองขนาดใหญ่",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การเชื่อมต่อกับแบบจำลองขนาดใหญ่และเอไอ",
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
                label: "เว็บ ๓ และบล็อกเชน",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "คลาวด์ เดฟออปส์",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "คลาวด์และโครงสร้างพื้นฐาน",
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