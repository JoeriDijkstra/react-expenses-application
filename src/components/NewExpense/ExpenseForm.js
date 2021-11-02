import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [showAddDisplay, setShowAddDisplay] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const cancelHandler = (event) => {
    setShowAddDisplay(false);
  };

  const displayAddHandler = () => {
    setShowAddDisplay(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShowAddDisplay(false);

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    clearValues();
  };

  const clearValues = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  let defaultContent = (
    <div className="new-expense__controls">
      <div className="new-expense__actions">
        <button onClick={displayAddHandler}>Add Expense</button>
      </div>
    </div>
  );

  let addContent = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
  return showAddDisplay ? addContent : defaultContent;
}

export default ExpenseForm;
