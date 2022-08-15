import "./ExpenseForm.css";
import react, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitleChange] = useState("");
  const [enteredAmount, setAmountChange] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput, setUserInput] = () =>
  //   useState({
  //     enteredTitle: "",
  //     entredAmount: "",
  //     entredDate: "",
  //   });

  const titleChange = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setTitleChange(event.target.value);
    console.log("TitleChanged !");
  };

  const amountChange = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setAmountChange(event.target.value);
    console.log("AmountChanged !");
  };

  const dateChange = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setDate(event.target.value);
    console.log("DateChanged !");
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitleChange("");
    setAmountChange("");
    setDate("");
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={titleChange} value={enteredTitle}  />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            value={enteredAmount}
            onChange={amountChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            value={enteredDate}
            onChange={dateChange}
            type="date"
            min="01.01.2019"
            max="01.01.2033"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Items</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
