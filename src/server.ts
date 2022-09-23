import express, { Express } from "express";
import dotenv from "dotenv";
import { DBConfig } from "./utils/dbconfig.utils";

//Initilizing Dotenv config
dotenv.config();

//Creating Server instance for Express;
const server: Express = express();
server.use(express);

//Declaring our port from environment variables
const port: string | number = process.env.PORT || 420;

//Making our express server run on port
server.listen(port, (): void => {
  console.log(`server Listening to ${port}`);
  //Initializing DB
  DBConfig.initDB();
});
