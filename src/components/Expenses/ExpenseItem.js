import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from "../UI/Card";

const ExpenseItem=(props)=>{
    const clickHandler=()=>{
        console.log('Clicked!');
    }

    const Deleting=()=>{
        console.log("Delete Clicked!");
    }
    document.getElementById('root').addEventListener("click",Deleting);

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__description'><h2>{props.location}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button>Delete Expense</button>
    </Card>
    );
}

export default ExpenseItem;