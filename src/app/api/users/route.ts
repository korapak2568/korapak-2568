// src/app/api/users/route.ts

import {NextResponse} from 'next/server';
import {MongoUserRepository} from '@/api/adapters/outbound/mongo.repository/user.repository';
import {UserService} from '@/api/core/services/user.service';
import {authorization} from "@/api/utils/bcrypt";

const userService = new UserService(new MongoUserRepository());

export async function POST(req: Request) {
    if (!authorization(req)) return new Response('Unauthorized', {status: 401})

    try {
        const body = await req.json();
        const user = await userService.create(body);
        return NextResponse.json(user, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function GET(req: Request) {
    if (!authorization(req)) return new Response('Unauthorized', {status: 401})

    try {
        const users = await userService.findAll()
        return NextResponse.json(users, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}