import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const theExpenseFilter = (enteredFilter) => {
    setFilteredYear(enteredFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesFilter = (
    <p
      style={{
        background: "white",
        fontFamily: "'Poppins', sans-serif",
        boxSizing: "border-box",
        borderRadius: "8px",
        height: "30px",
        width: "150px",
        border: "2px solid white",
      }}
    >
      No Items Found !
    </p>
  );

  if (filteredExpenses.length > 0) {
    expensesFilter = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={theExpenseFilter}
        />
        {expensesFilter}
      </Card>
    </div>
  );
}

export default Expenses;
