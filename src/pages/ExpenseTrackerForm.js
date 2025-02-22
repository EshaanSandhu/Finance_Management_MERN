import React, { useState } from 'react';
import { handleError } from '../utils';
import './ExpenseTrackerForm.css';

function ExpenseTrackerForm({ addExpenses }) {
  const [expenseInfo, setExpenseInfo] = useState({ text: '', amount: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyExpenseInfo = { ...expenseInfo };
    copyExpenseInfo[name] = value;
    setExpenseInfo(copyExpenseInfo);
  };
  const handleExpense = (e) => {
    e.preventDefault();
    const { text, amount } = expenseInfo;
    if (!text || !amount) {
      handleError('All Fields are required');
      return;
    }
    setTimeout(() => {
      setExpenseInfo({ text: '', amount: '' });
    }, 1000);
    addExpenses(expenseInfo);
  };
  return (
    <div className="expense-form-container">
      <h1>Finance Management</h1>
      <form onSubmit={handleExpense}>
        <div className="input-group">
          <label htmlFor="text">Expense Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="text"
            placeholder="Enter Expense Description"
            value={expenseInfo.text}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Enter Amount, Expense(-ve) & Income(+ve)"
            value={expenseInfo.amount}
          />
        </div>
        <button type="submit" className="add-expense-button">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseTrackerForm;