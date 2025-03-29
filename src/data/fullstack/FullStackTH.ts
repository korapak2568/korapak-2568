import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonTH} from "@/data/fullstack/frameworks/python/PythonTH";
import {PhpTH} from "@/data/fullstack/frameworks/php/PhpTH";
import {NodejsTH} from "@/data/fullstack/frameworks/nodejs/NodejsTH";
import {JavaTH} from "@/data/fullstack/frameworks/java/JavaTH";
import {GoTH} from "@/data/fullstack/frameworks/go/GoTH";
import {DotnetTH} from "@/data/fullstack/frameworks/dotnet/DotnetTH";

export const FullStackTH: IFullStack = {
    title: "การพัฒนาฝั่งหลังบ้าน เอพีไอ",
    span: "ประสบการณ์การพัฒนาฝั่งหลังบ้าน เอพีไอ",
    subTitle: "",

    dotnetcore: DotnetTH,
    go: GoTH,
    java: JavaTH,
    nodejs: NodejsTH,
    php: PhpTH,
    python: PythonTH,

    stacks: [],

    services: {
        title: "การพัฒนาฝั่งหลังบ้านและเอพีไอ",
        descriptions: [
            "สร้างเว็บแอปพลิเคชันที่ทรงพลัง ปลอดภัย และขยายขนาดได้ด้วยบริการพัฒนาฟูลสแต็กที่เชี่ยวชาญของเรา นักพัฒนาของเรามีความเชี่ยวชาญทั้งในเทคโนโลยีฟรอนต์เอนด์และแบคเอนด์ สร้างโซลูชันที่ครอบคลุมซึ่งปรับแต่งตามความต้องการทางธุรกิจเฉพาะของคุณ ความเชี่ยวชาญเทคนิคของ CHORN ครอบคลุมเทคโนโลยีหลากหลาย รวมถึง Node.js, .NET Core C#, Java Spring Boot, Python, Go และ PHP ทำให้เราสามารถจัดการโครงการที่มีความซับซ้อนได้ทุกระดับ ไม่ว่าคุณจะเปิดตัวการพิสูจน์แนวคิด (PoC) เบื้องต้นหรือกำลังพัฒนาผลิตภัณฑ์ที่พร้อมใช้งานในตลาด (MVP) ทีมงานที่มีทักษะของเราทำให้มั่นใจได้ว่ามีการบูรณาการที่ราบรื่นระหว่างส่วนติดต่อผู้ใช้และฟังก์ชันฝั่งเซิร์ฟเวอร์เพื่อประสบการณ์ผู้ใช้ที่ยอดเยี่ยม"
        ],
        items: [
            {
                title: "การบูรณาการระหว่างฟรอนต์เอนด์และแบคเอนด์ที่ราบรื่น",
                description: "พัฒนาเว็บแอปพลิเคชันที่เป็นหนึ่งเดียวกันด้วยการซิงโครไนซ์อย่างสมบูรณ์แบบระหว่างคอมโพเนนต์ฝั่งไคลเอนต์และเซิร์ฟเวอร์ที่มอบความเร็ว ความปลอดภัย และความสามารถในการปรับขนาด"
            },
            {
                title: "การปรับประสิทธิภาพ SEO และประสิทธิภาพทั่วไป",
                description: "ปรับปรุงการมองเห็นเว็บไซต์ของคุณบนเสิร์ชเอนจิ้นและประสบการณ์ผู้ใช้ผ่านโครงสร้างโค้ดที่เหมาะสม เวลาโหลดที่เร็วขึ้น และการจัดการทรัพยากรที่มีประสิทธิภาพ"
            },
            {
                title: "การทดสอบอัตโนมัติที่แข็งแกร่ง",
                description: "รับรองความน่าเชื่อถือและความเสถียรของแอปพลิเคชันด้วยเฟรมเวิร์คการทดสอบที่ครอบคลุมตลอดวงจรการพัฒนา"
            },
            {
                title: "การจัดการฐานข้อมูลขั้นสูง",
                description: "จัดโครงสร้างและจัดการข้อมูลของคุณอย่างมีประสิทธิภาพด้วยโซลูชันฐานข้อมูลที่เหมาะสม รวมถึง MySQL, MongoDB, PostgreSQL และเทคโนโลยีชั้นนำอื่นๆ"
            },
            {
                title: "บริการคลาวด์ระดับองค์กร",
                description: "ปรับใช้และขยายแอปพลิเคชันของคุณอย่างมีประสิทธิภาพโดยใช้ AWS, Azure, Google Cloud หรือแพลตฟอร์มคลาวด์อื่นๆ ด้วยการกำหนดค่าโครงสร้างพื้นฐานที่เหมาะสม"
            }
        ]
    }
}

FullStackTH.stacks = [
    FullStackTH.nodejs,
    FullStackTH.go,
    FullStackTH.java,
    FullStackTH.python,
    FullStackTH.php,
    FullStackTH.dotnetcore
]