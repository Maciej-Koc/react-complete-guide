import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  function titleChangerHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangerHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangerHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    //Prevent browser from reloading
    event.preventDefault();

    const expenseDate = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData();

    //Reset data after submit
    setTitle("");
    setAmount("");
    setDate("");

    // Debugging
    // console.log(expenseDate);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangerHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangerHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangerHandler}
            date={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
