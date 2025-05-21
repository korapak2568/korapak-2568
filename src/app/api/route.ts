// src/app/api/route.ts

import {NextResponse} from 'next/server';

export async function GET(req: Request) {
    try {
        return NextResponse.json({
            status: 200,
            message: 'CHORN API Service'
        }, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}