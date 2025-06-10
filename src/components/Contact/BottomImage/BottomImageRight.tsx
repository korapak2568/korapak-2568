import Image from "next/image";
import {Contact2025} from "@/data/contact/Contact2025";

export default function BottomImageRight() {
    return (
        <div className="right">
            <a href={Contact2025.line.link}
               target={'_blank'}>
                <Image
                    src={Contact2025.line.button}
                    alt="เพิ่มเพื่อน"
                    width={120}
                    height={36}
                />
            </a>
        </div>
    )
}