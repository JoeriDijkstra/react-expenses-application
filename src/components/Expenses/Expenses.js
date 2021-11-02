import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../GenericUI/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  const [selectDate, setSelectDate] = useState("2020");
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectDate;
  });

  const filterUpdateHandler = (filterData) => {
    setSelectDate(filterData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectDate}
        onFilterUpdate={filterUpdateHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
