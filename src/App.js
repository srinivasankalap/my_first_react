
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/AddExpense/AddExpense';
import { useState } from 'react';

const App=()=> {
  const expenses=[
    {
      id: 'e1',
      title: 'Food',
      amount: 50,
      date: new Date(2022, 5, 22),
    },
    {
      id: 'e2',
      title: 'Petrol',
      amount: 100,
      date: new Date(2023, 6, 6),
    },
    {
      id: 'e3',
      title: 'Movie',
      amount: 200,
      date: new Date(2023,0,22),
    }
  ]
  
  const [initialExpenses, setExpense]= useState(expenses);
  const addExpenseData=(expense)=>{
    setExpense((prevExpenses)=>[expense, ...prevExpenses]);
  }
  return (
    <div>
      <AddExpense onAddExpense={addExpenseData}/>
      <Expenses items={initialExpenses}/>
    </div>
  );
}

export default App;
