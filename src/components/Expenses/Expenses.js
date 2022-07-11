import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
