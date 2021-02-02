var express = require("express");
var router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const {
  getAllIncomeTransactions,
  postIncomeTransaction,
  deleteIncomeTransaction,
  getAllExpenseTransactions,
  postExpenseTransaction,
  deleteExpenseTransaction,
} = require("../model/index");

//get all income transactions
router.get("/income", async function (req, res) {
  console.log("all income transactions fired in routes");
  const incomeTransactions = await getAllIncomeTransactions();
  res.json({ payload: incomeTransactions });
});

//post an income transaction //upload
router.post("/income", async function (req, res) {
  const newIncomeTransaction = await postIncomeTransaction(req.body);
  res.json({ payload: newIncomeTransaction });
});

//delete an income transaction
router.delete("/income/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteIncomeTransaction(id);
  res.json({ success: true, message: result });
});

//get all expense transactions
router.get("/expense", async function (req, res) {
  console.log("all expense transactions fired in routes");
  const expenseTransactions = await getAllExpenseTransactions();
  res.json({ payload: expenseTransactions });
});

//post an expense transaction
router.post("/expense", async function (req, res) {
  const newExpenseTransaction = await postExpenseTransaction(req.body);
  res.json({ payload: newExpenseTransaction });
});

//delete an expense transaction
router.delete("/expense/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteExpenseTransaction(id);
  res.json({ success: true, message: result });
});

module.exports = router;
