// app/api/openai/route.ts (example in App Router)

import {NextResponse} from "next/server";
import {authorize, unauthorized} from "@/utils/authorize";
import openAiPloy from "@/adapters/outbound/openai/openai.ploy";

export async function POST(req: Request) {
    if (!authorize(req)) return unauthorized()

    try {
        const {prompt} = await req.json();
        const message = await openAiPloy(prompt)
        return NextResponse.json({
            message: message
        }, {status: 200});
    } catch (e: any) {
        return NextResponse.json({error: e.message}, {status: 400});
    }
}