// src/api/core/ports/user.interface.ts

import {Task} from "@/core/domain/task.entity"
import {TaskResponse} from "@/core/domain/task.entity";

export interface TaskInterface {
    create(task: Task): Promise<TaskResponse | null>;

    findById(id: string): Promise<TaskResponse | null>;

    findByTitle(title: string): Promise<TaskResponse | null>;

    deleteById(id: string): Promise<void>;

    findAll(): Promise<TaskResponse[]>;

    update(task: Task): Promise<TaskResponse | null>;
}