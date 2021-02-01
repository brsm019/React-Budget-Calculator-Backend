const { query } = require("../database/poolConnect");

async function getAllIncomeTransactions() {
  const res = await query("SELECT * FROM incomeList");
  return res.rows;
}

async function postIncomeTransaction(income) {
  const res = await query(
    "INSERT INTO incomeList (incomeText, incomeAmount) VALUES ($1, $2)",
    [income.incomeText, income.incomeAmount]
  );
  return { status: "New income transaction added" };
}

async function deleteIncomeTransaction(id) {
  const res = await query("DELETE FROM incomeList WHERE id = $1", [id]);
  return { status: `Income transaction ${id} deleted successfully` };
}

async function getAllExpenseTransactions() {
  const res = await query("SELECT * FROM expenseList");
  return res.rows;
}

async function postExpenseTransaction(expense) {
  const res = await query(
    "INSERT INTO expenseList (expenseText, expenseAmount) VALUES ($1, $2)",
    [expense.expenseText, expense.expenseAmount]
  );
  return { status: "New expense transaction added" };
}

async function deleteExpenseTransaction(id) {
  const res = await query("DELETE FROM expenseList WHERE id = $1", [id]);
  return { status: `Expense transaction ${id} deleted successfully` };
}

module.exports = {
  getAllIncomeTransactions,
  postIncomeTransaction,
  deleteIncomeTransaction,
  getAllExpenseTransactions,
  postExpenseTransaction,
  deleteExpenseTransaction,
};
