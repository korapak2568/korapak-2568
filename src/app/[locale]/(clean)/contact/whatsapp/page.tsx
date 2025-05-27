import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import "@/app/[locale]/(clean)/contact/whatsapp/whatsapp.scss"
import Link from "next/link";

export default async function Page() {
    return (
        <div>
            <div className="whatsapp-container">
                <Image
                    src={ImageUrl.contact.whatsapp.path}
                    alt={ImageUrl.contact.whatsapp.title}
                    width={300}
                    height={300}
                />

                <Link href="https://wa.me/qr/5M7PS2GDSMFZI1">WhatsApp</Link>

                <div className="home">
                    <Link href="/public">Home</Link>
                </div>
            </div>
        </div>
    )
}