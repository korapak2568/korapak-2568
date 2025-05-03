import {TaskInterface} from "@/api/core/ports/task.interface";
import {Task, TaskResponse, TaskDocumentResponse, mapTaskResponse} from "@/api/core/domain/task.entity";
import {taskCollection} from "@/api/infrastructure/db/infra.mongodb";
import {ObjectId} from "mongodb";
import {getNowTimeBangkokAsia} from "@/api/utils/timezone";

export class TaskRepository implements TaskInterface {

    constructor() {
        this.ensureIndexes().then()
    }

    private async ensureIndexes() {
        try {
            await taskCollection.createIndex({title: 1}, {unique: true, name: 'unique_title_index'})
        } catch (err) {
            console.error("Failed to create indexes on tasks collection: ", err)
        }
    }

    async create(task: Task): Promise<TaskResponse | null> {
        const {id, ...taskToInsert} = {createAt: getNowTimeBangkokAsia(), ...task};
        const data = await taskCollection.insertOne(taskToInsert)
        const taskDocument: TaskDocumentResponse = {
            ...taskToInsert,
            _id: data.insertedId,
        }
        return taskDocument ? mapTaskResponse(taskDocument) : null;
    }

    async findByTitle(title: string): Promise<TaskResponse | null> {
        const data = await taskCollection.findOne({title})
        return data ? mapTaskResponse(data) : null
    }

    async findById(id: string): Promise<TaskResponse | null> {
        const data = await taskCollection.findOne({_id: new ObjectId(id)})
        return data ? mapTaskResponse(data) : null
    }

    async findAll(): Promise<TaskResponse[]> {
        const data = taskCollection.find({})
        const tasks = await data.toArray()
        return tasks.map(task => ({
            id: task._id.toHexString(),
            title: task.title,
            description: task.description,
            status: task.status,
        }))
    }

    async update(task: Task): Promise<TaskResponse> {
        if (!task.id) {
            throw new Error('Task ID is required')
        }

        const {id, ...taskData} = task;
        const data = await taskCollection.updateOne(
            {_id: new ObjectId(id)},
            {
                $set: {
                    ...taskData,
                    updatedAt: getNowTimeBangkokAsia(),
                }
            }
        )

        if (data.modifiedCount === 0) {
            throw new Error('User not found')
        }

        return task
    }

    async deleteById(id: string): Promise<void> {
        await taskCollection.deleteOne({_id: new ObjectId(id)})
    }
}