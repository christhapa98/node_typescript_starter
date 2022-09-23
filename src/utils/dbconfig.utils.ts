import mySql from "mysql2";

export class DBConfig {

  //MY Sql DB config object
  static _dbConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "pieonion",
  };
 
  //Initializing MySQL Db, Creating Connection and connecting to database
  static initDB() {
    return mySql
      .createConnection(this._dbConfig)
      .connect((err?: Error | null) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Connection Successfull");
        }
      });
  }
}
