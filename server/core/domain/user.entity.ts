// src/api/core/domain/user.entity.ts

import {ObjectId} from "mongodb";

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}

export interface UserResponse {
    id?: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
}

export type UserDocumentResponse = {
    _id: ObjectId;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
} | null;

export function mapUserResponse(userDocument: UserDocumentResponse): UserResponse | null {
    if (!userDocument) {
        return null
    }

    return {
        id: userDocument._id.toHexString(),
        firstname: userDocument.firstname,
        lastname: userDocument.lastname,
        username: userDocument.username,
        email: userDocument.email
    };
}