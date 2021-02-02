const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

console.log("Database_URL", process.env.DATABASEURI);

const config = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  databaseUri: process.env.PGDATABASEURI,
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
