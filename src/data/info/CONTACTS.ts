import {IContact} from "@/data/model/common/IContact";
import {IMAGES} from "@/data/IMAGES";

export const CONTACTS: IContact[] = [
    {
        isLINE: false,
        icon: "flaticon-pin",
        label: "Location",
        isLink: true,
        link: "https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu",
        linkText: "Chiang Mai, Thailand",
    },
    {
        isLINE: false,
        icon: "flaticon-email-1",
        label: "Email",
        isLink: true,
        link: "mailto:contact@chorn.in.th",
        linkText: "contact@chorn.in.th",
    },
    {
        isLINE: false,
        icon: "flaticon-call",
        label: "+66 (0)52 000548",
        isLink: false,
        link: "",
        linkText: "Mon-  Fri : 08:30 - 17:30",
    },
    {
        isLINE: false,
        icon: "bx bxl-github",
        label: "GitHub",
        isLink: true,
        link: "https://github.com/chorn-digital",
        linkText: "CHORN Digital",
    },
    {
        isLINE: false,
        icon: "bx bxl-linkedin",
        label: "LinkedIn",
        isLink: true,
        link: "https://www.linkedin.com/company/chorn",
        linkText: "CHORN LinkedIn",
    },
    {
        isLINE: true,
        icon: "",
        label: "LINE",
        isLink: true,
        link: IMAGES.line.icon.link,
        linkText: "CHORN LINE",
    }
]