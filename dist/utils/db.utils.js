"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConfig = void 0;
var mysql2_1 = __importDefault(require("mysql2"));
var DBConfig = /** @class */ (function () {
    function DBConfig() {
    }
    //Initializing MySQL Db, Creating Connection and connecting to database
    DBConfig.initDB = function () {
        return mysql2_1.default
            .createConnection(this._dbConfig)
            .connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Connection Successfull");
            }
        });
    };
    //MY Sql DB config object
    DBConfig._dbConfig = {
        host: "localhost",
        user: "root",
        password: "password",
        port: 3306,
        database: "pieonion",
    };
    return DBConfig;
}());
exports.DBConfig = DBConfig;
