const { query } = require("./poolConnect");

const incomeSQL = `CREATE TABLE incomeList (
  id SERIAL PRIMARY KEY,
  incomeText TEXT,
  IncomeAmount INTEGER
)`;

const expenseSQL = `CREATE TABLE expenseList (
  id SERIAL PRIMARY KEY,
  expenseText TEXT,
  expenseAmount INTEGER
)`;

async function createIncomeTable() {
  const res = query(incomeSQL);
  console.log(res);
}

async function createExpenseTable() {
  const res = query(expenseSQL);
  console.log(res);
}

createIncomeTable();
createExpenseTable();
