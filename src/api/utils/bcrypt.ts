import bcrypt from 'bcryptjs';
import {verify} from "jsonwebtoken";

export async function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export function authorization(req: Request) {
    const token = req.headers.get('x-auth-token')
    if (!token) return new Response('Unauthorized', {status: 401})

    try {
        verify(token, process.env.JWT_SECRET!)
        return true;
    } catch (error: any) {
        return new Response('Unauthorized', {status: 401})
    }
}