import {TaskInterface} from "@/api/core/ports/task.interface";
import {TaskResponse} from "@/api/core/domain/task.entity";
import {Task} from "@/api/core/domain/task.entity";

export class TaskService implements TaskInterface {
    constructor(private readonly taskInterface: TaskInterface) {
    }

    async create(task: Task): Promise<TaskResponse | null> {
        return this.taskInterface.create(task);
    }

    async findAll(): Promise<TaskResponse[]> {
        return this.taskInterface.findAll();
    }

    async findById(id: string): Promise<TaskResponse | null> {
        return this.taskInterface.findById(id);
    }

    async findByTitle(title: string): Promise<TaskResponse | null> {
        return this.taskInterface.findByTitle(title);
    }

    async update(task: Task): Promise<TaskResponse | null> {
        return this.taskInterface.update(task);
    }

    async deleteById(id: string): Promise<void> {
        return this.taskInterface.deleteById(id);
    }
}