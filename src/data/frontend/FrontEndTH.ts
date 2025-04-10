import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
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
    span: "ประสบการณ์พัฒนาฝั่งหน้าบ้าน",
    subTitle: "",

    angular: AngularTH,
    css3: Css3TH,
    html5: Html5TH,
    nextjs: NextjsTH,
    react: ReactTH,
    typescript: TypeScriptTH,
    vue: VueTH,
    javascript: JavaScriptTH,

    stacks: [
        NextjsTH,
        ReactTH,
        AngularTH,
        VueTH,
        JavaScriptTH,
        TypeScriptTH,
        Html5TH,
        Css3TH
    ],

    services: {
        title: "การพัฒนาฝั่งหน้าบ้าน",
        descriptions: [
            "การพัฒนาฟรอนต์เอนด์เป็นส่วนต่อประสานที่สำคัญระหว่างผู้ใช้กับบริการดิจิทัล สร้างองค์ประกอบที่มองเห็นได้และส่วนประกอบเชิงโต้ตอบที่กำหนดประสบการณ์ผู้ใช้ ชั้นที่สำคัญนี้เปลี่ยนระบบแบ็คเอนด์ที่ซับซ้อนให้เป็นอินเตอร์เฟซที่ใช้งานง่ายและเข้าถึงได้ ซึ่งดึงดูดผู้ชมและผลักดันการเติบโตทางธุรกิจ เฟรมเวิร์กสมัยใหม่ รวมถึง Next.js, React, Angular และ Vue.js พร้อมด้วยเทคโนโลยีเว็บหลักอย่าง HTML5 และ CSS3 ช่วยให้สามารถสร้างแอปพลิเคชันประสิทธิภาพสูงที่โหลดได้อย่างรวดเร็วและตอบสนองอย่างราบรื่นบนทุกอุปกรณ์ โซลูชันฟรอนต์เอนด์ที่มีประสิทธิภาพช่วยเพิ่มการมีส่วนร่วมของผู้ใช้ ปรับปรุงอัตราการแปลง และเสริมสร้างการรับรู้แบรนด์ผ่านประสบการณ์ดิจิทัลที่สอดคล้องและเป็นมืออาชีพซึ่งตอบสนองทั้งวัตถุประสงค์ทางธุรกิจและความต้องการของผู้ใช้"
        ],
        items: [
            {
                title: "การใช้งานเฟรมเวิร์กสมัยใหม่",
                description: "แอปพลิเคชันเว็บที่มีความเคลื่อนไหวและมีการโต้ตอบโดยใช้เฟรมเวิร์กล้ำสมัยอย่าง Next.js และ React ที่มอบประสิทธิภาพสูงสุด การตอบสนองที่ดี และประสบการณ์ผู้ใช้ที่ยอดเยี่ยม"
            },
            {
                title: "การปรับแต่ง SEO",
                description: "ปรับปรุงการมองเห็นเว็บไซต์บน Google และเสิร์ชเอนจินอื่นๆ ผ่านโครงสร้างโค้ดที่ปรับให้เหมาะสม การโหลดที่รวดเร็ว และการออกแบบที่เป็นมิตรกับอุปกรณ์มือถือ ช่วยเพิ่มการเข้าชมแบบออร์แกนิคและลดต้นทุนการเข้าถึงลูกค้า"
            },
            {
                title: "การพัฒนาพรูฟ ออฟ คอนเซ็ปต์ (PoC)",
                description: "การตรวจสอบความถูกต้องของแนวคิดนวัตกรรมอย่างรวดเร็วผ่านต้นแบบที่ใช้งานได้จริง ช่วยลดความเสี่ยงและให้ผู้มีส่วนได้ส่วนเสียสามารถมองเห็นแนวคิดก่อนการลงทุนเต็มรูปแบบ"
            },
            {
                title: "การสร้างโปรดักต์ที่มีความเป็นไปได้ขั้นต่ำ (MVP)",
                description: "เวอร์ชันเริ่มต้นที่มีคุณสมบัติครบถ้วนและขยายขนาดได้ ช่วยดึงดูดผู้ใช้ในระยะแรก สร้างข้อเสนอแนะที่มีคุณค่า และดึงดูดนักลงทุนที่มีศักยภาพในขณะที่สร้างการมีอยู่ในตลาด"
            },
            {
                title: "การออกแบบ UI/UX",
                description: "อินเตอร์เฟซที่ใช้งานง่ายและสวยงาม ช่วยเพิ่มการมีส่วนร่วม ลดอัตราการตีกลับ และเพิ่มการแปลงผ่านหลักการออกแบบที่เน้นผู้ใช้เป็นศูนย์กลางและมาตรฐานการเข้าถึง"
            }
        ]
    }
}