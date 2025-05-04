import {NextResponse} from "next/server";
import {verify} from "jsonwebtoken";

export function authorization(req: Request) {
    const token = req.headers.get('x-auth-token')
    if (!token) return notAuthenticated()

    try {
        verify(token, process.env.JWT_SECRET!)
        return true;
    } catch (error: any) {
        return notAuthenticated()
    }
}

export function notAuthenticated() {
    return NextResponse.json(
        {status: 401, message: "Unauthorized"}, {status: 401});
}