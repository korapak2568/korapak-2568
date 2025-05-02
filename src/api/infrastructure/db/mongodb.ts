// src/api/infrastructure/db/mongodb.ts

import {Collection, MongoClient} from 'mongodb';
import {User} from "@/api/core/domain/user.entity";

const uri = process.env.MONGODB_URI!;
const databaseName = process.env.MONGODB_DATABASE!;
const collectionName = process.env.MONGODB_COLLECTION_USERS!;
export const client = new MongoClient(uri);

export const db = client.db(databaseName);
export const usersCollection: Collection<Omit<User, `id`>> = db.collection(collectionName);