const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  port: process.env.PORT || 5000,
  password: process.env.PASSWORD,
  databaseURL: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

module.exports = {
  query: (sql, value, cb) => {
    return pool.query(sql, value, cb);
  },
};
