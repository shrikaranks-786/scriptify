import * as dotenv from "dotenv";
import type {Config} from "drizzle-kit";
dotenv.config({path : ".env"});

if(!process.env.DATABASE_URL){
    console.log("there is no data base url");
}

export default{
    schema : "./src/lib/spabase/schema.ts",
    out : "./migrations",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    },
} satisfies Config;

