
import Expenses from './components/Expenses/Expenses';

const App=()=> {
  const expenses=[
    {
      id: 'e1',
      title: 'Food',
      amount: 50,
      date: new Date(2022, 5, 22),
      location: 'Delhi'
    },
    {
      id: 'e2',
      title: 'Petrol',
      amount: 100,
      date: new Date(2023, 6, 6),
      location: 'Kodaikanal'
    },
    {
      id: 'e3',
      title: 'Movie',
      amount: 200,
      date: new Date(2023,0,22),
      location:'Hyderabad'
    }
  ]
  return (
    <div>
      <h2>Expense Items</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
