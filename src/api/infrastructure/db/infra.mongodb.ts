// src/api/infrastructure/db/infra.mongodb.ts

import {Collection, MongoClient} from 'mongodb';
import {User} from "@/api/core/domain/user.entity";
import {Task} from "@/api/core/domain/task.entity";

const uri = process.env.MONGODB_URI!;
const databaseName = process.env.MONGODB_DATABASE!;
const userCollectionName = process.env.MONGODB_COLLECTION_USERS!;
const taskCollectionName = process.env.MONGODB_COLLECTION_TASKS!;

// Export
export const client = new MongoClient(uri);
export const db = client.db(databaseName);

// Collection
export const usersCollection: Collection<Omit<User, `id`>> = db.collection(userCollectionName);
export const taskCollection: Collection<Omit<Task, `id`>> = db.collection(taskCollectionName);