// src/app/api/line/fah/route.ts

import {NextResponse} from "next/server";
import {authorization, notAuthenticated} from "@/utils/authorization";
import openAiFah from "@/adapters/outbound/openai/openai.fah";

const LineConfigFah = {
    channelSecret: process.env.FAH_CHANNEL_SECRET,
    channelAccessToken: process.env.FAH_CHANNEL_ACCESS_TOKEN,
}

export async function POST(req: Request) {
    if (!authorization(req)) return notAuthenticated()

    try {
        const {prompt} = await req.json();
        const message = await openAiFah(prompt)
        return NextResponse.json({
            message: message
        }, {status: 200});
    } catch (e: any) {
        return NextResponse.json({error: e.message}, {status: 400});
    }
}