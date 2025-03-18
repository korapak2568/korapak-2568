// src/app/lib/mongodb.ts

import {MongoClient} from 'mongodb';
import {config} from 'dotenv'

// Load env configuration
config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusterawschorn.ibcse.mongodb.net/`;

const options = {
    maxPoolSize: 10, // Limit connections to reduce overhead
    serverSelectionTimeoutMS: 3000, // Fail fast if DB is unavailable
};
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function connectDB() {
    return (await clientPromise).db(process.env.DB_NAME); // Use 'taskDB' as the database name
}