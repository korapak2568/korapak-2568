// src/app/api/tasks/route.ts

import {TaskService} from "@/core/services/task.service";
import {TaskRepository} from "@/adapters/outbound/mongo.repository/task.repository";
import {authorization} from "@/utils/bcrypt";
import {NextResponse} from "next/server";

const taskService = new TaskService(new TaskRepository());

export async function POST(req: Request) {
    if (!authorization(req)) return new Response('Unauthorized', {status: 401})

    try {
        const body = await req.json()
        const task = await taskService.create(body)
        return NextResponse.json(task, {status: 201})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}

export async function GET(req: Request) {
    if (!authorization(req)) return new Response('Unauthorized', {status: 401})

    try {
        const tasks = await taskService.findAll()
        return NextResponse.json(tasks, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}