import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataWorkPolicy} from "@/metadata/main/MetadataWorkPolicy";
import {getPlatformPolicyContent} from "@/lib/platform-content/policyContent";
import PlatformPolicyPage from "@/components/Policy/PlatformPolicyPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataWorkPolicy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformPolicyContent("workplace-policy", lang);

    return <PlatformPolicyPage lang={lang} content={content} policyType="workplace-policy" eyebrow="Workplace Policy" accent="workplace"/>;
}
