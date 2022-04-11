import './App.css';
import NewExpense from './components/newExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Car Rent',
      amount: 120,
      date: new Date(2022, 3, 14)
    },
    {
      id: 'e2',
      title: 'room Rent',
      amount: 12000,
      date: new Date(2022, 3, 14)
    },
    {
      id: 'e3',
      title: 'Demart',
      amount: 1200,
      date: new Date(2022, 3, 14)
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items = {expense}/>
    </div>
  );
}

export default App;
