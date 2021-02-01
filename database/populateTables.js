const { query } = require("./poolConnect");
const { incomeTransactions, expenseTransactions } = require("./dummyData");

const sqlIncome =
  "INSERT INTO incomeList (incomeText, incomeAmount) VALUES($1, $2)";

const sqlExpense =
  "INSERT INTO expenseList (expenseText, expenseAmount) VALUES ($1, $2)";

function populateIncomeTable() {
  incomeTransactions.map(async (value) => {
    const res = await query(sqlIncome, [value.incomeText, value.incomeAmount]);
    console.log(res);
  });
}

function populateExpenseTable() {
  expenseTransactions.map(async (value) => {
    const res = await query(sqlExpense, [
      value.expenseText,
      value.expenseAmount,
    ]);
    console.log(res);
  });
}

populateIncomeTable();
populateExpenseTable();
