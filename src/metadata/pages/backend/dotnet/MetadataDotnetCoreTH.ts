import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreTH: Metadata = {
    title: ".NET Core C# การพัฒนาแบบ Full Stack | CHORN",
    description: "การพัฒนา .NET Core C# แบบ Full Stack ด้วยความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่ทันสมัย ขยายได้ และปลอดภัย.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# การพัฒนา | CHORN",
        description: "สร้างแอปพลิเคชันเว็บที่ปลอดภัย ขยายได้ และทันสมัย ด้วยความเชี่ยวชาญทางเทคนิคในการพัฒนา .NET Core C# แบบ Full Stack.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# การพัฒนาแบบ Full Stack | CHORN",
        description: "ความเชี่ยวชาญในการพัฒนา .NET Core C# แบบ Full Stack สำหรับการสร้างแอปพลิเคชันเว็บที่ทันสมัยและขยายได้.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# การพัฒนา", ".NET Core C# ความเชี่ยวชาญทางเทคนิค", ".NET Core C# นักพัฒนา", "การพัฒนา .NET Core C# แบบกำหนดเอง",
        "แอปพลิเคชัน .NET Core C# สำหรับองค์กร", "ASP.NET Core C# การพัฒนา", ".NET Core C# แอปพลิเคชันเว็บ",
        "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",

        "แอปพลิเคชันเว็บที่ขยายได้", "การพัฒนาแบ็คเอนด์", "โซลูชันซอฟต์แวร์สำหรับองค์กร", "การพัฒนา Full Stack",
        "แอปพลิเคชันที่มีประสิทธิภาพสูง", "แอปพลิเคชันเว็บแบบกำหนดเอง", "การพัฒนา API",

        ".NET Core C# นักพัฒนา ไทย", ".NET Core C# นักพัฒนา กรุงเทพ", ".NET Core C# นักพัฒนา เชียงใหม่",
        "นักพัฒนาแบ็คเอนด์ ไทย", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ไทย",

        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}