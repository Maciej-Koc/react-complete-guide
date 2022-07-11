import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [year, setYear] = React.useState("2020");

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Pushing State 
        https://www.youtube.com/watch?v=UrpNtB61qyo */}
        <ExpensesFilter passYear={(year) => setYear(year)} />
        {filteredYear.map((expense) => (
          <ExpenseItem
            key={expense.id} //Unique identifier required for React, add when mapping list
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
