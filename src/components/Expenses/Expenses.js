import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Filter from './Filter';
import Card from "../UI/Card";
import { useState } from "react";

const Expenses=(props)=>{
    const [year, setYear]=useState('2023');
    const filterYear=(selectedYear)=>{
      setYear(selectedYear);
    }
    const filteredArray=props.items.filter(expense=>{
      const expenseYear = expense.date.getFullYear().toString();
      return expenseYear===year;
    });
    return (
    <Card className="expenses">
      <Filter selected={year} onChangeFilter={filterYear}/>
      {
        filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </Card>
  );
}


export default Expenses;