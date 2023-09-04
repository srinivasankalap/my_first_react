
import './Expenses.css';
import Filter from './Filter';
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
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
      <li>
    <Card className="expenses">
      <Filter selected={year} onChangeFilter={filterYear}/>
      <ExpenseList items={filteredArray}/>
    </Card>
    </li>
  );
}


export default Expenses;