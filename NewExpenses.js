import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = () => {
const saveExpenses = (enteredExpenseData)=>{
  const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
  };
  console.log(expenseData);
};

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenses} />
    </div>
  );
};

export default NewExpenses;
