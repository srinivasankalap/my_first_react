import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense=(props)=>{
    const savingExpenseData=(inputExpenseData)=>{
        const expenseData={
            ...inputExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={savingExpenseData}/>
        </div>
    )
}

export default AddExpense;