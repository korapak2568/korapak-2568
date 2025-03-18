// src/app/api/tasks/[id]/route.ts

import {ObjectId} from 'mongodb';
import {connectDB} from '@/lib/mongodb';
import {NextRequest, NextResponse} from 'next/server';
import NodeCache from 'node-cache';

const cache = new NodeCache({stdTTL: 60}); // Cache for 60 seconds

export async function GET(req: NextRequest, {params}: { params: { id: string } }) {
    try {
        // Check if task data is already in cache
        let task = cache.get(`task_${params.id}`);

        if (!task) {
            // Cache miss, fetch task from DB
            if (!ObjectId.isValid(params.id)) {
                return NextResponse.json({error: 'Invalid task ID format'}, {status: 400});
            }

            const db = await connectDB();
            task = await db.collection('tasks').findOne({_id: new ObjectId(params.id)});

            if (!task) {
                return NextResponse.json({error: 'Task not found'}, {status: 404});
            }

            // Cache the task for future requests
            cache.set(`task_${params.id}`, task);
        }

        return NextResponse.json(task, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function PUT(req: NextRequest, {params}: { params: { id: string } }) {
    try {
        const db = await connectDB();
        const {title, description, status} = await req.json();

        if (!ObjectId.isValid(params.id)) {
            return NextResponse.json({error: 'Invalid task ID format'}, {status: 400});
        }

        const result = await db.collection('tasks').updateOne(
            {_id: new ObjectId(params.id)},
            {$set: {title, description, status}}
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({error: 'Task not found'}, {status: 404});
        }

        // Invalidate the cache after updating the task
        cache.del(`task_${params.id}`);

        return NextResponse.json({message: 'Task updated successfully'}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
    try {
        const db = await connectDB();

        if (!ObjectId.isValid(params.id)) {
            return NextResponse.json({error: 'Invalid task ID format'}, {status: 400});
        }

        const result = await db.collection('tasks').deleteOne({_id: new ObjectId(params.id)});

        if (result.deletedCount === 0) {
            return NextResponse.json({error: 'Task not found'}, {status: 404});
        }

        // Invalidate the cache after deleting the task
        cache.del(`task_${params.id}`);

        return NextResponse.json({message: 'Task deleted successfully'}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
