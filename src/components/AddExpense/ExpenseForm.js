import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=()=>{
    const [prevtitle, setTitle]=useState('');
    const TitleChanged=(e)=>{
        setTitle(e.target.value);
    }
    const [prevamount, setAmount]=useState('');
    const AmountChanged=(e)=>{
        setAmount(e.target.value);
    }
    const [prevdate, setDate]=useState('');
    const DateChanged=(e)=>{
        setDate(e.target.value);
    }

    const submitClicked=(e)=>{
        e.preventDefault();
        const expenseData={
            title: prevtitle,
            amount: prevamount,
            date: new Date(prevdate)
        };
        console.log(expenseData);
    }

    return (
        <form onSubmit={submitClicked}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type='text' onChange={TitleChanged}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type='number' onChange={AmountChanged}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={DateChanged}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;