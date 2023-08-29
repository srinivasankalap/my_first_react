import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const arr=[
    {
      title: 'Food',
      amount: 50,
      date: new Date(2022, 5, 22),
      location: 'Delhi'
    },
    {
      title: 'Petrol',
      amount: 100,
      date: new Date(2023, 6, 6),
      location: 'Kodaikanal'
    },
    {
      title: 'Movie',
      amount: 200,
      date: new Date(2023,0,22),
      location:'Hyderabad'
    }
  ]
  return (
    <div>
      <h2>Expense Items</h2>
      {arr.map((item)=>(
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
          />
      ))}
    </div>
  );
}

export default App;
