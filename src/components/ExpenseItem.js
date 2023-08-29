import './ExpenseItem.css'

function ExpenseItem(){
    const ExpenseDate=new Date(2023, 6, 29);
    const ExpenseName='Food';
    const ExpenseValue=10.95;
    const LocationOfExpenditure='Ooty'
    return (
    <div className='expense-item'>
        <div>{ExpenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{ExpenseName}</h2>
        </div>
        <div className='expense-item__description'><h2>{LocationOfExpenditure}</h2></div>
        <div className='expense-item__price'>${ExpenseValue}</div>
    </div>
    )
}

export default ExpenseItem;