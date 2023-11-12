import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const ExpensesData = (enteredExpenseData) => {
    const expensesData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expensesData);
    setIsEditing(false)
  };
  const clickHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveExpense={ExpensesData} onCancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
