// src/api/core/services/user.service.ts

import {UserInterface} from "@/api/core/ports/user.interface";
import {User, UserResponse} from "@/api/core/domain/user.entity";
import {hashPassword} from "@/api/utils/bcrypt";

export class UserService {
    constructor(private userInterface: UserInterface) {
    }

    async create(user: Omit<User, 'id'>): Promise<UserResponse | null> {
        const existing = await this.userInterface.findByEmail(user.email);
        if (existing) throw new Error('Email already exists');

        const hashed = await hashPassword(user.password);
        return this.userInterface.create({...user, password: hashed});
    }

    async findAll(): Promise<UserResponse[]> {
        return this.userInterface.findAll()
    }

    async findById(id: string): Promise<UserResponse | null> {
        return this.userInterface.findById(id);
    }

    async findByEmail(email: string): Promise<UserResponse | null> {
        return this.userInterface.findByEmail(email);
    }

    async deleteById(id: string): Promise<void> {
        return this.userInterface.deleteById(id);
    }

    async update(user: User): Promise<UserResponse> {
        return this.userInterface.update(user);
    }

    async login(email: string, password: string): Promise<UserResponse | null> {
        return this.userInterface.login(email, password);
    }
}