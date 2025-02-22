import React from 'react';
import './ExpenseDetails.css';

function ExpenseDetails({ incomeAmt, expenseAmt }) {
  return (
    <div className="expense-details-container">
      <div className="balance-amount">Your Balance is {incomeAmt - expenseAmt}</div>
      <div className="amounts-container">
        <div className="income-section">
          Income <span className="income-amount">{incomeAmt}</span>
        </div>
        <div className="expense-section">
          Expense <span className="expense-amount">{expenseAmt}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetails;