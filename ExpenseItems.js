import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDates from "./ExpenseDate";

import React, { useState } from "react";
const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const btnClicked = () => {
    setTitle("Upadted!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
        <button onClick={btnClicked}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItems;
