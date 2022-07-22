import express,{Express ,Request,Response} from 'express';
import dotenv from 'dotenv';
import { db } from './src/utils/db.connect';

dotenv.config();

const server :Express = express();
const port = process.env.PORT || 420;

server.use(express);

server.listen(port,()=>{
    console.log(`server Listening to ${port}`);
    db.connect((err : Error)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("Connection Successfull");
        }
    })
});