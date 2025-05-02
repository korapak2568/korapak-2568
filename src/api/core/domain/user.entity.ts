// src/api/core/domain/user.entity.ts

import {ObjectId} from "mongodb";

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
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