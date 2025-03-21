import {IFooter} from "@/data/footer/model/IFooter";

export const FooterTH: IFooter = {
    title: "ชอร์น",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN เป็นพันธมิตรด้านนวัตกรรมของคุณ ให้บริการโซลูชันซอฟต์แวร์ล้ำสมัย " +
        "เว็บไซต์ที่สามารถขยายรองรับผู้ใช้งานนับล้าน และความเป็นเลิศที่พร้อมรับอนาคต " +
        "เพิ่มศักยภาพดิจิทัลของคุณไปกับเรา",
    importantTitle: "ลิงก์สำคัญ",
    featureTitle: "บริการเด่น",
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
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "ติดตามเราบน GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/khachornchit",
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
            label: "ความเชี่ยวชาญทางเทคนิค",
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
            label: "พัฒนา Front-End",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "พัฒนา Back-End และ API",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps และ Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "เพื่อนคุยเอไอ LINE แบบ LLM",
            link: "/ai-companions/fah/",
        },
        {
            label: "การเชื่อมต่อกับ LLM/AI",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 และ Smart Contract",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "รูปแบบการทำงาน",
            linkText: "ระยะไกล, ออฟฟิศ, แบบผสม",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        },
        {
            label: "รูปแบบบริการ",
            linkText: "งานประจำ, สัญญาจ้าง, รายโปรเจ็กต์",
            link: "/",
            icon: "flaticon-connection hover-rotate",
        },
    ],
};
