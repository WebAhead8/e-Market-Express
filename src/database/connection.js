const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();
let connectionString;

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = process.env.DATABASE_URL_DEV;
}

const db = new pg.Pool({ connectionString });

module.exports = db;
