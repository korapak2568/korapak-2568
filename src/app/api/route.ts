// src/app/api/route.ts

import {NextResponse} from 'next/server';
import {authorization, notAuthenticated} from "@/utils/authorization";

export async function GET(req: Request) {
    if (!authorization(req)) return notAuthenticated()

    try {
        return NextResponse.json({
            status: 200,
            message: 'CHORN API Service'
        }, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}