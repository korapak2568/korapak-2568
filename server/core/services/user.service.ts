// src/api/core/services/user.service.ts

import {UserInterface} from "@/core/ports/user.interface";
import {User, UserResponse} from "@/core/domain/user.entity";
import {hashPassword} from "@/utils/bcrypt";

export class UserService implements UserInterface {
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

    async update(user: User): Promise<UserResponse | null> {
        return this.userInterface.update(user);
    }

    async deleteById(id: string): Promise<void> {
        return this.userInterface.deleteById(id);
    }

    async login(email: string, password: string): Promise<UserResponse | null> {
        return this.userInterface.login(email, password);
    }
}