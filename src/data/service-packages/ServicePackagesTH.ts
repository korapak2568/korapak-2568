import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesTH: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "แพ็กเกจลำดับความสำคัญสูง 3 แบบ — Premium Innovation Plan, Web3 Core Plan และ NFT Evolution Plan — สำหรับการพัฒนาเต็มเวลาโดยเฉพาะ เหมาะสำหรับการเปิดตัวภายใน 3–12 เดือน เหมาะกับโครงการที่สำคัญหรือเร่งด่วน",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/เดือน",
                hourlyEquivalent: "$37.49 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, เฉพาะเจาะจง, หรือประจำ)",
                highlight: "การสนับสนุนเต็มเวลาแบบพิเศษสำหรับโปรเจกต์ที่ไม่เกี่ยวกับบล็อกเชน เช่น MVP, การอัปเกรดระบบ และการขยายระบบ",
                features: [
                    "อัปเกรดระบบ, พัฒนาฟีเจอร์ใหม่, ขยายระบบ, PoC, MVP",
                    "รองรับทุกภาษาและเฟรมเวิร์กหลัก ทั้งฝั่งหน้าและหลัง รวมถึงการพัฒนา API",
                    "รองรับฐานข้อมูลและแพลตฟอร์มคลาวด์หลักทั้งหมด",
                    "รองรับโปรโตคอลยุคใหม่และดั้งเดิม เช่น gRPC, RPI, JMS เป็นต้น"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/เดือน",
                hourlyEquivalent: "$43.74 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, เฉพาะเจาะจง, หรือประจำ)",
                highlight: "พัฒนาบล็อกเชนแบบครบวงจร พร้อมการเชื่อมต่อ Web3 ครบชุด รวมถึงโทเคโนมิกส์และสมาร์ตคอนแทรกต์",
                features: [
                    "พัฒนา Blockchain และ Web3 ด้วย Solidity, Ethers.js, Ethereum",
                    "สร้าง ตรวจสอบ และเชื่อมต่อสมาร์ตคอนแทรกต์",
                    "พัฒนา Front-End และ Back-End ด้วย Next.js, React, Node.js",
                    "ระบบโทเคน เช่น airdrop, presale, ระบบรางวัล"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/เดือน",
                hourlyEquivalent: "$43.74 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, เฉพาะเจาะจง, หรือประจำ)",
                highlight: "พัฒนา NFT โดยเฉพาะ ทั้งสร้างใหม่และอัปเกรดสมาร์ตคอนแทรกต์เดิม",
                features: [
                    "พัฒนา NFT รูปแบบใหม่ และอัปเกรด NFT เดิม",
                    "สร้างหรือปรับปรุงสมาร์ตคอนแทรกต์ด้วย Solidity",
                    "รองรับการเชื่อมต่อเฟรมเวิร์ก Front-End และ Back-End หลัก เช่น Next.js, React, Node.js",
                    "รองรับมาตรฐาน NFT (ERC721, ERC1155) และการเชื่อมต่อกับ Marketplace"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "แพ็กเกจแบบแบ่งเวลา 3 แบบ — Essential Care Plan, Growth Support Plan และ Blockchain Pioneer Plan — สำหรับการพัฒนาอย่างต่อเนื่องหรือดูแลโปรเจกต์หลังเปิดตัว พร้อมการจัดตารางและการขยายที่ยืดหยุ่น",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/เดือน",
                hourlyEquivalent: "$5.625 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, แบ่งเวลา)",
                highlight: "สนับสนุนระยะยาวที่เชื่อถือได้โดยไม่พัฒนาฟีเจอร์ใหม่ เหมาะกับระบบที่เสถียรแล้ว",
                features: [
                    "ตรวจสอบระบบ, บำรุงรักษา, และสนับสนุนทางเทคนิค",
                    "อัปเดตเอกสารและช่วยให้ทีมเรียนรู้",
                    "ไม่รวมการพัฒนาฟีเจอร์ใหม่",
                    "รองรับภาษาโปรแกรมและฐานข้อมูลหลักทั้งหมด"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/เดือน",
                hourlyEquivalent: "$12.49 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, แบ่งเวลา)",
                highlight: "การสนับสนุนที่ยืดหยุ่นพร้อมพัฒนาต่อเนื่องสำหรับระบบที่กำลังเติบโต",
                features: [
                    "ดูแลระบบและพัฒนาฟีเจอร์ใหม่",
                    "รองรับภาษาและเฟรมเวิร์กหลักทั้งหมด",
                    "ปรับปรุงอย่างต่อเนื่องสำหรับเว็บไซต์, API หรือแพลตฟอร์มแบบกำหนดเอง",
                    "รองรับฐานข้อมูลและคลาวด์หลักทั้งหมด"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/เดือน",
                hourlyEquivalent: "$18.74 USD/ชั่วโมง",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (ครึ่งเวลา, แบ่งเวลา)",
                highlight: "เหมาะสำหรับธุรกิจที่กำลังขยายตัว ด้วยความสมดุลของเวลาในการพัฒนาและการตอบสนองความต้องการที่ต่อเนื่อง",
                features: [
                    "จัดสรรเวลาสำหรับการพัฒนาและปรับปรุงฟีเจอร์อย่างต่อเนื่อง",
                    "รองรับการพัฒนาแบบ Full-Stack ทั้งฝั่ง Front-End และ Back-End",
                    "เหมาะสำหรับแพลตฟอร์มที่มีการเติบโตและต้องการอัปเดตอย่างสม่ำเสมอ",
                    "รองรับการเชื่อมต่อกับบริการและ API จากภายนอก",
                    "ครอบคลุมเฟรมเวิร์ก ฐานข้อมูล และแพลตฟอร์มคลาวด์หลัก"
                ],
                // link: "service-packages/advanced-growth-plan/"
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/เดือน",
                hourlyEquivalent: "$24.99 USD/ชม.",
                schedule: "จันทร์–ศุกร์, 8:30–17:30 (เต็มเวลา, แบ่งเวลา)",
                highlight: "พัฒนา Blockchain แบบแบ่งเวลาสำหรับโปรเจกต์ Web3, Blockchain และ NFT ที่กำลังเริ่มต้น",
                features: [
                    "รองรับ Web3, Smart Contract, NFT และ Ethereum",
                    "รองรับการเชื่อมต่อ Front-End และ Back-End สำหรับแพลตฟอร์มแบบกำหนดเอง",
                    "เหมาะสำหรับโปรเจกต์บล็อกเชนที่ต้องพัฒนาอย่างต่อเนื่อง"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "แพ็กเกจพัฒนารายชั่วโมงที่ยืดหยุ่น — เหมาะสำหรับทีม Agile, สตาร์ทอัป และนักพัฒนาบล็อกเชนที่ต้องการการสนับสนุนแบบเรียลไทม์ รวมถึงแพ็กเกจแก้ไขด่วนพิเศษ!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/ชั่วโมง",
                hourlyEquivalent: "$40 USD/ชม.",
                hours: "20–40 ชม./สัปดาห์",
                highlight: "บริการพัฒนาแบบ Part-time หรือ Full-time ด้วยความสามารถแบบ Full-Stack",
                features: [
                    "พัฒนา Software, เว็บไซต์ และ API ตามความต้องการ",
                    "รองรับภาษาและเฟรมเวิร์กหลักทั้งหมด",
                    "เหมาะสำหรับทีมที่ต้องการนักพัฒนาที่ยืดหยุ่นและมีทักษะ"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/ชั่วโมง",
                hourlyEquivalent: "$60 USD/ชม.",
                hours: "20–40 ชม./สัปดาห์",
                highlight: "บริการบล็อกเชนขั้นสูงสำหรับธุรกิจ Web3 และผู้พัฒนา NFT",
                features: [
                    "พัฒนา Blockchain, Smart Contract, NFT และ Ethereum",
                    "รองรับเฟรมเวิร์ก Front-End และ Back-End เช่น Next.js, React, Node.js",
                    "รองรับการเชื่อมต่อแบบกำหนดเองทั้งหน้าและหลังบ้าน",
                    "มีความยืดหยุ่นสำหรับโปรเจกต์ Web3 ขั้นสูง"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/ครั้ง",
                hourlyEquivalent: "$30 USD/ชม.",
                hours: "สำรองเวลา 8 ชม./วัน",
                highlight: "ตอบสนองฉุกเฉินอย่างรวดเร็ว — วินิจฉัยและแก้ไขปัญหาภายในวันเดียว",
                features: [
                    "ให้คำปรึกษาและการสนับสนุนทันที",
                    "ส่งงานภายในวันเดียว",
                    "แก้ไขบั๊กจุดเดียวสำหรับโปรเจกต์ภายนอก",
                    "ไม่ต้องทำสัญญาระยะยาว"
                ],
                link: "service-packages/"
            }
        ]
    }
};