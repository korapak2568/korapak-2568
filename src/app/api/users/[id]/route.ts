// src/app/api/users/[id]/route.ts

import {NextRequest, NextResponse} from 'next/server';
import {MongoUserRepository} from '@/adapters/outbound/mongo.repository/user.repository';
import {UserService} from '@/core/services/user.service';
import {authorization, notAuthenticated} from "@/utils/authorization";

const userService = new UserService(new MongoUserRepository());

export async function GET(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorization(req)) return notAuthenticated()

    const user = await userService.findById(params.id);
    if (!user) return NextResponse.json({error: 'User not found'}, {status: 404});
    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorization(req)) return notAuthenticated()

    const existUser = await userService.findById(params.id);
    if (!existUser) return NextResponse.json({error: 'User not found'}, {status: 404});

    const body = await req.json();
    const updateUser = {id: params.id, ...body};
    const result = await userService.update(updateUser)

    if (!result) return NextResponse.json({message: 'Update not updated!'});

    return NextResponse.json(result);
}

export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorization(req)) return notAuthenticated()

    await userService.deleteById(params.id);
    return NextResponse.json({message: 'User deleted'});
}