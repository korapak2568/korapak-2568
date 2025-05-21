import {NextResponse} from "next/server";
import {verify} from "jsonwebtoken";

export interface IXAuthToken {
    name: string;
    value: string | null;
    isToken: boolean;
}

export function setXAuthToken(req: Request): IXAuthToken {
    const token = req.headers.get('x-auth-token')

    return {
        name: "x-auth-token",
        value: token,
        isToken: token !== null && token.length >= 100,
    }
}

export function authorize(req: Request) {
    const token = setXAuthToken(req)
    if (!token.isToken) return unauthorized()

    try {
        verify(token.value!, process.env.JWT_SECRET!)
        return true
    } catch (error: any) {
        console.error(error.message)
        return false
    }
}

export function unauthorized() {
    return NextResponse.json(
        {
            status: 401,
            message: "Unauthorized"
        }, {status: 401});
}