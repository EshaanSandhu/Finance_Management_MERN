import React from 'react';
import './ExpensesTable.css';

function ExpensesTable({ expenses, handleDeleteExpense }) {
  const expenseArray = expenses ? Object.values(expenses) : [];
  return (
    <div className="expense-list">
      {expenseArray.map((expense, index) => (
        <div key={index} className="expense-item">
          <button className="delete-button" onClick={() => handleDeleteExpense(expense._id)}>
            X
          </button>
          <div className="expense-description">{expense.text}</div>
          <div className="expense-amount" style={{ color: expense.amount > 0 ? '#27ae60' : '#e74c3c' }}>
            {expense.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpensesTable;