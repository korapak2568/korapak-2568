// src/api/infrastructure/repositories/user.repository.ts

import {UserInterface} from '@/api/core/ports/user.interface';
import {User, UserResponse, UserDocumentResponse} from '@/api/core/domain/user.entity';
import {usersCollection} from '@/api/infrastructure/db/mongodb';
import {ObjectId} from 'mongodb';
import bcrypt from "bcryptjs";

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

        return mapMongoUserResponse(useDocument);
    }

    async create(user: User): Promise<UserResponse | null> {
        const {id, ...userToInsert} = user;
        const result = await usersCollection.insertOne(userToInsert);
        const userDocument: UserDocumentResponse = {
            ...userToInsert,
            _id: result.insertedId,
        };

        return userDocument ? mapMongoUserResponse(userDocument) : null;
    }

    async findByEmail(email: string): Promise<UserResponse | null> {
        const userDocument: UserDocumentResponse = await usersCollection.findOne({email});
        return userDocument ? mapMongoUserResponse(userDocument) : null;
    }

    async findById(id: string): Promise<UserResponse | null> {
        const userDocument: UserDocumentResponse = await usersCollection.findOne({_id: new ObjectId(id)});
        return userDocument ? mapMongoUserResponse(userDocument) : null;
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

    async update(user: User): Promise<UserResponse> {
        if (!user.id) {
            throw new Error('User ID is required')
        }

        const {id, ...updateData} = user;
        const result = await usersCollection.updateOne(
            {_id: new ObjectId(id)},
            {
                $set: {
                    ...updateData,
                    updatedAt: new Date(),
                }
            }
        )

        if (result.modifiedCount === 0) {
            throw new Error('User not found')
        }

        return user;
    }
}

function mapMongoUserResponse(userDocument: UserDocumentResponse): UserResponse | null {
    if (!userDocument) {
        return null
    }

    return {
        id: userDocument._id.toHexString(),
        firstname: userDocument.firstname,
        lastname: userDocument.lastname,
        username: userDocument.username,
        email: userDocument.email
    };
}