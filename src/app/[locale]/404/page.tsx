import type {Metadata} from "next";
import {headers} from "next/headers";
import {Metadata404} from "@/metadata/pages/404/common/Metadata404";
import {notFound} from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return Metadata404[lang]
}

export default function FindNotFound() {
    notFound();
}