// src/app/api/tasks/[id]/route.ts

import {Task} from "@/core/domain/task.entity";
import {TaskService} from "@/core/services/task.service";
import {TaskRepository} from "@/adapters/outbound/mongo.repository/task.repository";
import {authorize, unauthorized} from "@/utils/authorize";
import {NextRequest, NextResponse} from "next/server";

const taskService = new TaskService(new TaskRepository());

export async function GET(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorize(req)) return unauthorized()

    try {
        const task = await taskService.findById(params.id);
        if (!task) return NextResponse.json({error: "Find not found task."}, {status: 404})
        return NextResponse.json(task);
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}

export async function PUT(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorize(req)) return unauthorized()

    try {
        const body = await req.json()
        const updateTask: Task = {id: params.id, ...body}
        const task = await taskService.update(updateTask);
        if (!task) return NextResponse.json({error: "Cannot update the task."}, {status: 400})
        return NextResponse.json(task);
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}

export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
    if (!authorize(req)) return unauthorized()

    try {
        await taskService.deleteById(params.id);
        return NextResponse.json({message: 'User deleted'})
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: 400})
    }
}
