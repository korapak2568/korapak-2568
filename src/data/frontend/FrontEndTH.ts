import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueTH} from "@/data/frontend/frameworks/vue/VueTH";
import {TypeScriptTH} from "@/data/frontend/frameworks/typescript/TypeScriptTH";
import {ReactTH} from "@/data/frontend/frameworks/react/ReactTH";
import {NextjsTH} from "@/data/frontend/frameworks/nextjs/NextjsTH";
import {JavaScriptTH} from "@/data/frontend/frameworks/javascript/JavaScriptTH";
import {Html5TH} from "@/data/frontend/frameworks/html5/Html5TH";
import {Css3TH} from "@/data/frontend/frameworks/css3/Css3TH";
import {AngularTH} from "@/data/frontend/frameworks/angular/AngularTH";

export const FrontEndTH: IFrontEnd = {
    title: "การพัฒนาฝั่งหน้าบ้าน",
    span: "ประสบการณ์การพัฒนาฝั่งหน้าบ้าน",
    subTitle: "",

    angular: AngularTH,
    css3: Css3TH,
    html5: Html5TH,
    nextjs: NextjsTH,
    react: ReactTH,
    typescript: TypeScriptTH,
    vue: VueTH,
    javascript: JavaScriptTH,

    stacks: [],

    services: {
        title: "บริการการพัฒนาฝั่งหน้าบ้าน",
        descriptions: [
            "เปลี่ยนวิสัยทัศน์เว็บของคุณให้เป็นความจริงด้วยบริการพัฒนาฟรอนต์เอนด์ที่เชี่ยวชาญของเรา CHORN นำเสนอเว็บไซต์ที่ใช้งานง่าย สวยงามและตอบสนองอย่างเต็มที่ซึ่งดึงดูดผู้ชมของคุณ เราเชี่ยวชาญในเฟรมเวิร์กที่ทันสมัย เช่น Next.js, React, Angular และ Vue.js ควบคู่ไปกับเทคโนโลยีเว็บหลักอย่าง HTML5 และ CSS3 ไม่ว่าคุณจะต้องการแอปพลิเคชันหน้าเดียว (SPA) ที่มีประสิทธิภาพสูงที่เหมาะสำหรับเสิร์ชเอนจิ้น หรือแพลตฟอร์มหลายหน้าที่ซับซ้อน นักพัฒนาของเราให้ผลลัพธ์ที่มีคุณภาพตรงเวลา เป็นพันธมิตรกับ CHORN เพื่อสร้างประสบการณ์ดิจิทัลที่น่าสนใจซึ่งดึงดูดผู้เข้าชมและขับเคลื่อนการเติบโตทางธุรกิจ"
        ],
        items: [
            {
                title: "การใช้งานเฟรมเวิร์กที่ทันสมัย",
                description: "สร้างแอปพลิเคชันเว็บที่ไดนามิกและโต้ตอบได้โดยใช้เฟรมเวิร์กล้ำสมัยอย่าง Next.js และ React ที่ให้ประสิทธิภาพและประสบการณ์ผู้ใช้ที่เหมาะสมที่สุด"
            },
            {
                title: "การปรับแต่ง SEO",
                description: "ปรับปรุงการมองเห็นเว็บไซต์ของคุณบน Google และเสิร์ชเอนจิ้นอื่นๆ ผ่านโครงสร้างโค้ดที่เหมาะสม เวลาโหลดที่รวดเร็ว และการออกแบบที่เป็นมิตรกับมือถือ"
            },
            {
                title: "การพัฒนาพิสูจน์แนวคิด (PoC)",
                description: "ทดสอบและตรวจสอบแนวคิดที่เป็นนวัตกรรมของคุณอย่างรวดเร็วด้วยต้นแบบที่ใช้งานได้จริงก่อนที่จะมุ่งมั่นสู่การพัฒนาเต็มรูปแบบ"
            },
            {
                title: "การสร้างผลิตภัณฑ์ที่สามารถใช้งานได้ขั้นต่ำ (MVP)",
                description: "เปิดตัวเวอร์ชันเริ่มต้นของผลิตภัณฑ์ของคุณที่มีคุณสมบัติครบถ้วนและขยายได้เพื่อดึงดูดผู้ใช้รายแรก รวบรวมข้อเสนอแนะ และหาผู้ลงทุนที่มีศักยภาพ"
            },
            {
                title: "ความเป็นเลิศด้านการออกแบบ UI/UX",
                description: "เพิ่มความพึงพอใจของผู้ใช้ด้วยอินเทอร์เฟซที่ใช้งานง่ายและสวยงามซึ่งเพิ่มการมีส่วนร่วม ลดอัตราการตีกลับ และเพิ่มการแปลงเป็นลูกค้า"
            }
        ]
    }
}

FrontEndTH.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]