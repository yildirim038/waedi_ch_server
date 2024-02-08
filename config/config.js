import dotenv from "dotenv";

dotenv.config();

const serverPort = process.env.PORT;
const username   = process.env.DB_USER;
const password   = process.env.DB_PASS;
const database   = process.env.DB_NAME;
const host       =  process.env.HOST;
const dialect    = "mysql";
const pool       = {
                    "max": 5,
                    "min": 0,
                    "acquire": 30000,
                    "idle": 10000
                  }

export { username, password, serverPort, database, host,dialect,pool };