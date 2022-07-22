import mySql from "mysql";

import * as dotenv from "dotenv";

dotenv.config();

export const db = mySql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:420,
    database: process.env.DBNAME,
});

