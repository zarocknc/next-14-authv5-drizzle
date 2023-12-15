import { drizzle } from "drizzle-orm/postgres-js"
import config from "../../drizzle.config";
import postgres from 'postgres';


const queryClient = postgres({
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!
})

export const db = drizzle(queryClient);