import { useState } from "react";
import Expense from "./Components/Expense";
import NewExpense from "./Components/NewExpense";

const DUMMY_Expense = [
  {
    id: 1,
    title: 'electricity bill',
    date: new Date(2021,2,28),
    amount: 200
  },
  {
    id: 2,
    title: 'interior design',
    date: new Date(2022,3,21),
    amount: 2000
  },
  {
    id: 3,
    title: 'vehile bills',
    date: new Date(2023,5,20),
    amount: 500
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_Expense)
  const AddExpenses = (expense) => {
    setExpenses((prevState)=>{
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={AddExpenses}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
