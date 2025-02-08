// src/app/api/tasks/route.ts

import {connectDB} from '@/app/lib/mongodb';
import {NextResponse} from 'next/server';
import NodeCache from "node-cache";

const cache = new NodeCache({stdTTL: 60})

export async function POST(req: Request) {
    try {
        const db = await connectDB();
        const tasksCollection = db.collection('tasks');
        const {title, description, status} = await req.json();

        const result = await tasksCollection.insertOne({title, description, status});

        // Invalidate cache after a write operation
        cache.del("tasksCache")

        return NextResponse.json({message: 'Task created successfully', id: result.insertedId}, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function GET() {
    try {
        // Try to get the data from the cache
        let tasks = cache.get("tasksCache")

        if (!tasks) {
            // Cache miss, fetch data from the database
            const db = await connectDB();
            const tasksCollection = db.collection('tasks');
            tasks = await tasksCollection.find().toArray();

            // Save the data to the cache
            cache.set("tasksCache", tasks);
        }

        return NextResponse.json(tasks, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}