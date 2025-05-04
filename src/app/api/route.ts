// src/app/api/route.ts

import {NextResponse} from 'next/server';
import {authorize, unauthorized} from "@/utils/authorize";

export async function GET(req: Request) {
    if (!authorize(req)) return unauthorized()

    try {
        return NextResponse.json({
            status: 200,
            message: 'CHORN API Service'
        }, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}