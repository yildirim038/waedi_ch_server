const serverPort = 3001;
const username = "root";
const password = "202lsn202";
const database = "waedi_ch"
const host =  "127.0.0.1"
const dialect = "mysql"
const pool = {
    "max": 5,
    "min": 0,
    "acquire": 30000,
    "idle": 10000
  }

export { username, password, serverPort, database, host,dialect,pool };