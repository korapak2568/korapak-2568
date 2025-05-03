// app/api/openai/route.ts (example in App Router)
import {NextResponse} from "next/server";
import {authorization, notAuthenticated} from "@/utils/authorization";
import openaiDefault from "@/adapters/outbound/openai/openai.default";

export async function POST(req: Request) {
    if (!authorization(req)) return notAuthenticated()

    try {
        const {prompt} = await req.json();
        const message = await openaiDefault(prompt)
        return NextResponse.json({
            message: message
        }, {status: 200});
    } catch (e: any) {
        return NextResponse.json({error: e.message}, {status: 400});
    }
}