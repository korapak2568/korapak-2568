// src/api/infrastructure/repositories/user.repository.ts

import {UserInterface} from '@/api/core/ports/user.interface';
import {User, UserResponse, UserDocumentResponse, mapUserResponse} from '@/api/core/domain/user.entity';
import {usersCollection} from '@/api/infrastructure/db/infra.mongodb';
import {ObjectId} from 'mongodb';
import bcrypt from "bcryptjs";
import {getNowTimeBangkokAsia} from "@/api/utils/timezone";

export class MongoUserRepository implements UserInterface {

    constructor() {
        this.ensureIndexes().then()
    }

    private async ensureIndexes() {
        try {
            await usersCollection.createIndex({email: 1}, {unique: true, name: 'unique_email_index'})
        } catch (err) {
            console.error("Failed to create indexes on users collection: ", err)
        }
    }

    async login(email: string, password: string): Promise<UserResponse | null> {
        const useDocument = await usersCollection.findOne({email});
        if (!useDocument) return null;

        const isValid = await bcrypt.compare(password, useDocument.password);
        if (!isValid) return null;

        return mapUserResponse(useDocument);
    }

    async create(user: User): Promise<UserResponse | null> {
        const {id, ...userToInsert} = {...user, createdAt: getNowTimeBangkokAsia()};
        const result = await usersCollection.insertOne(userToInsert);
        const userDocument = {
            ...userToInsert,
            _id: result.insertedId,
        };

        return userDocument ? mapUserResponse(userDocument) : null;
    }

    async findByEmail(email: string): Promise<UserResponse | null> {
        const userDocument = await usersCollection.findOne({email});
        return userDocument ? mapUserResponse(userDocument) : null;
    }

    async findById(id: string): Promise<UserResponse | null> {
        const userDocument = await usersCollection.findOne({_id: new ObjectId(id)});
        return userDocument ? mapUserResponse(userDocument) : null;
    }

    async deleteById(id: string): Promise<void> {
        await usersCollection.deleteOne({_id: new ObjectId(id)});
    }

    async findAll(): Promise<UserResponse[]> {
        const cursor = usersCollection.find({});
        const userDocuments = await cursor.toArray()

        return userDocuments.map(doc => ({
            id: doc._id.toHexString(),
            firstname: doc.firstname,
            lastname: doc.lastname,
            username: doc.username,
            email: doc.email
        }))
    }

    async update(user: User): Promise<UserResponse | null> {
        if (!user.id) {
            throw new Error('User ID is required')
        }

        const {id, ...userData} = user;
        const data = await usersCollection.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: {
                    ...userData,
                    updatedAt: getNowTimeBangkokAsia(),
                }
            }
        )

        if (data.modifiedCount === 0) {
            throw new Error('User not found')
        }

        return user;
    }
}