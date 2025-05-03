// src/app/api/login/route.ts

import {NextRequest, NextResponse} from "next/server";
import {UserService} from "@/core/services/user.service";
import {MongoUserRepository} from "@/adapters/outbound/mongo.repository/user.repository";
import {sign} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const userService = new UserService(new MongoUserRepository())

export async function POST(req: NextRequest) {
    const {email, password} = await req.json();
    const user = await userService.login(email, password);

    if (!user) {
        return NextResponse.json({error: 'Invalid credentials'}, {status: 401})
    }

    const payload = {sub: user.id, email: user.email}

    const token = sign(
        payload,
        JWT_SECRET,
        {expiresIn: '1h'}
    )

    return NextResponse.json({token})
}