import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
const saveExpenses = (enteredExpenseData)=>{
  const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
  };
  props.onAddExpense(expenseData);
};

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenses} />
    </div>
  );
};

export default NewExpenses;
