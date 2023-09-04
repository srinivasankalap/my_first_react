import { useState } from 'react';
import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense=(props)=>{
    const [adding, setAdding]=useState(false);
    const savingExpenseData=(inputExpenseData)=>{
        const expenseData={
            ...inputExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAdding(false);
    }
    const startAdding=()=>{
        return setAdding(true);
    }
    const stopAdding=()=>{
        return setAdding(false);
    }
    return (
        <div className='new-expense'>
            {!adding && (
                <button onClick={startAdding}>Add New Expense</button>
            )}
            {adding && (
                <ExpenseForm 
                    onSaveExpenseData={savingExpenseData}
                    onCancel={stopAdding}
                />
            )}
            
        </div>
    )
}

export default AddExpense;