// src/app/api/users/route.ts

import {NextResponse} from 'next/server';
import {MongoUserRepository} from '@/adapters/outbound/mongo.repository/user.repository';
import {UserService} from '@/core/services/user.service';
import {authorization, notAuthenticated} from "@/utils/authorization";

const userService = new UserService(new MongoUserRepository());

export async function POST(req: Request) {
    if (!authorization(req)) return notAuthenticated()

    try {
        const body = await req.json();
        const user = await userService.create(body);
        return NextResponse.json(user, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function GET(req: Request) {
    if (!authorization(req)) return notAuthenticated()

    try {
        const users = await userService.findAll()
        return NextResponse.json(users, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}