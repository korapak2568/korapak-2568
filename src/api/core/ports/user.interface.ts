// src/api/core/ports/user.interface.ts

import {User, UserResponse} from '@/api/core/domain/user.entity';

export interface UserInterface {
    create(user: User): Promise<UserResponse | null>;

    findByEmail(email: string): Promise<UserResponse | null>;

    findById(id: string): Promise<UserResponse | null>;

    deleteById(id: string): Promise<void>;

    findAll(): Promise<UserResponse[]>;

    update(user: User): Promise<UserResponse | null>;

    login(email: string, password: string): Promise<UserResponse | null>;
}