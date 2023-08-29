import './ExpenseDetails.css';
function ExpenseDetails(props){
    return(
        <div className='expense-details'>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__description'><h2>{props.location}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}

export default ExpenseDetails;