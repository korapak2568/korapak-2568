import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonTH} from "@/data/fullstack/frameworks/python/PythonTH";
import {PhpTH} from "@/data/fullstack/frameworks/php/PhpTH";
import {NodejsTH} from "@/data/fullstack/frameworks/nodejs/NodejsTH";
import {JavaTH} from "@/data/fullstack/frameworks/java/JavaTH";
import {GoTH} from "@/data/fullstack/frameworks/go/GoTH";
import {DotnetTH} from "@/data/fullstack/frameworks/dotnet/DotnetTH";

export const FullStackTH: IFullStack = {
    title: "การพัฒนาฝั่งหลังบ้าน",
    span: "ประสบการณ์การพัฒนาฝั่งหลังบ้าน",
    subTitle: "",

    dotnetcore: DotnetTH,
    go: GoTH,
    java: JavaTH,
    nodejs: NodejsTH,
    php: PhpTH,
    python: PythonTH,

    stacks: [],

    services: {
        title: "การพัฒนาฝั่งหลังบ้าน",
        descriptions: [
            "การพัฒนาแบ็คเอนด์เป็นรากฐานสำคัญของแอปพลิเคชันเว็บที่ทรงพลัง ปลอดภัย และขยายขนาดได้ ระบบเบื้องหลังนี้จำเป็นสำหรับการประมวลผลข้อมูล การจัดการฐานข้อมูล และการรักษาความปลอดภัย ทำให้ธุรกิจสามารถรองรับผู้ใช้จำนวนมากพร้อมกัน สร้างประสบการณ์ที่ราบรื่น และปกป้องข้อมูลสำคัญ เทคโนโลยีที่ใช้ครอบคลุม Node.js, Java Spring Boot, Python, Go, PHP และ .NET Core สามารถตอบสนองความต้องการของโปรเจกต์ทุกระดับความซับซ้อน ตั้งแต่ Proof of Concept (PoC) จนถึง Minimum Viable Product (MVP) ที่พร้อมสำหรับตลาด การผสานที่ราบรื่นระหว่างส่วนติดต่อผู้ใช้และฟังก์ชันฝั่งเซิร์ฟเวอร์ทำให้ผู้ใช้ได้รับประสบการณ์ที่เหนือระดับและช่วยให้ธุรกิจบรรลุเป้าหมายได้อย่างมีประสิทธิภาพ"
        ],
        items: [
            {
                title: "การผสานฟรอนต์เอนด์และแบ็คเอนด์อย่างไร้รอยต่อ",
                description: "แอปพลิเคชันเว็บที่เป็นเอกภาพด้วยการซิงโครไนซ์ที่สมบูรณ์แบบระหว่างส่วนประกอบฝั่งไคลเอนต์และเซิร์ฟเวอร์ มอบความเร็ว ความปลอดภัย และความสามารถในการขยายขนาด"
            },
            {
                title: "การปรับประสิทธิภาพ SEO และประสิทธิภาพอย่างครอบคลุม",
                description: "เพิ่มการมองเห็นบนเครื่องมือค้นหาและประสบการณ์ผู้ใช้ผ่านโครงสร้างโค้ดที่ปรับให้เหมาะสม เวลาโหลดที่เร็วขึ้น และการจัดการทรัพยากรที่มีประสิทธิภาพ"
            },
            {
                title: "การทดสอบอัตโนมัติที่แข็งแกร่ง",
                description: "แอปพลิเคชันที่เชื่อถือได้และมีเสถียรภาพด้วยเฟรมเวิร์คการทดสอบที่ครอบคลุมซึ่งผสานไว้ตลอดวงจรการพัฒนา"
            },
            {
                title: "การจัดการฐานข้อมูลขั้นสูง",
                description: "โครงสร้างและการจัดการข้อมูลอย่างมีประสิทธิภาพด้วยโซลูชันฐานข้อมูลที่เหมาะสม รวมถึง MySQL, MongoDB, PostgreSQL และเทคโนโลยีชั้นนำอื่นๆ"
            },
            {
                title: "บริการคลาวด์ระดับองค์กร",
                description: "การปรับใช้และขยายแอปพลิเคชันอย่างมีประสิทธิภาพโดยใช้ AWS, Azure, Google Cloud หรือแพลตฟอร์มคลาวด์อื่นๆ ด้วยการกำหนดค่าโครงสร้างพื้นฐานที่เหมาะสม"
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