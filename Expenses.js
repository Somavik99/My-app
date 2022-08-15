import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
function Expenses(props) {
 const [filteredYear, setFilteredYear] =useState('2019');
  const theExpenseFilter = (enteredFilter)=>{
    setFilteredYear(enteredFilter);
 
  };
  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onExpenseFilter={theExpenseFilter} />
      <ExpenseItems
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItems
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItems
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItems
        title={props.expenses[3].title}
        amount={props.expenses[2].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;
