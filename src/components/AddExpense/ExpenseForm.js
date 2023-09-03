import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=()=>{
    const [title, setTitle]=useState('');
    const TitleChanged=(e)=>{
        setTitle(e.target.value);
    }
    const [amount, setAmount]=useState('');
    const AmountChanged=(e)=>{
        setAmount(e.target.value);
    }
    const [date, setDate]=useState('');
    const DateChanged=(e)=>{
        setDate(e.target.value);
    }

    return (
        <form>
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