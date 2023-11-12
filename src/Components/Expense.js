import { useState } from "react";
import Card from "./Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = ({ items }) => {
  const [filteredYear, setFiltredYear] = useState("2020");
  const onFilterChangeHandler = (filterYear) => {
    setFiltredYear(filterYear);
  };

  const FilteredItems = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpenseChart FilteredItems={FilteredItems}/>
        <ExpenseList items={FilteredItems}/>
      </Card>
    </div>
  );
};

export default Expense;
