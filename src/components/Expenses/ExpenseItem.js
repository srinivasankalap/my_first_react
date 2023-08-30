import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from "../UI/Card";

const ExpenseItem=(props)=>{
    const [title,newTitle]=useState(props.title);
    const [cost,newCost]=useState(props.amount);

    const clickHandler=()=>{
        newTitle("Updated..");
        console.log('Clicked!');
    }

    const Deleting=()=>{
        newCost(100);
        };
    

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__description'><h2>{props.location}</h2></div>
            <div className='expense-item__price'>${cost}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={Deleting}>Change Expense</button>
    </Card>
    );
    }

export default ExpenseItem;