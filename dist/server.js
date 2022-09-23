"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_utils_1 = require("./utils/db.utils");
//Initilizing Dotenv config
dotenv_1.default.config();
//Creating Server instance for Express;
var server = (0, express_1.default)();
server.use(express_1.default);
//Declaring our port from environment variables
var port = process.env.PORT || 420;
//Making our express server run on port
server.listen(port, function () {
    console.log("server Listening to ".concat(port));
    //Initializing DB
    db_utils_1.DBConfig.initDB();
});
