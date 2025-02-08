// src/app/api/tasks/route.ts
import {connectDB} from '@/app/lib/mongodb';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
    try {
        const db = await connectDB();
        const tasksCollection = db.collection('tasks');
        const {title, description, status} = await req.json();

        const result = await tasksCollection.insertOne({title, description, status});
        return NextResponse.json({message: 'Task created successfully', id: result.insertedId}, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function GET() {
    try {
        const db = await connectDB();
        const tasksCollection = db.collection('tasks');
        const tasks = await tasksCollection.find().toArray();
        return NextResponse.json(tasks, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}