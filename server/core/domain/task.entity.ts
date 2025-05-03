// src/api/core/domain/task.entity.ts

import {ObjectId} from "mongodb";

export interface Task {
    id?: string;
    title: string;
    description: string;
    status: boolean;
    createdAt: Date;
}

export interface TaskResponse {
    id?: string;
    title: string;
    description: string;
    status: boolean;
}

export type TaskDocumentResponse = {
    _id: ObjectId;
    title: string;
    description: string;
    status: boolean;
} | null;

export function mapTaskResponse(taskDocument: TaskDocumentResponse): TaskResponse | null {
    if (!taskDocument) {
        return null
    }

    return {
        id: taskDocument._id.toHexString(),
        title: taskDocument.title,
        description: taskDocument.description,
        status: taskDocument.status
    };
}