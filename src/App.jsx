import React, {useState} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const allExpenses = [
		{
		  id: 'e1',
		  title: 'Rockets',
		  amount: 94.12,
		  date: new Date(2020, 7, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
		  id: 'e3',
		  title: 'Car Insurance',
		  amount: 294.67,
		  date: new Date(2021, 2, 28),
		},
		{
		  id: 'e4',
		  title: 'New Desk (Wooden)',
		  amount: 450,
		  date: new Date(2021, 5, 12),
		},
		{
			id: 'e5',
			title: 'Books',
			amount: 300,
			date: new Date(2022, 5, 14),
		},
		{
			id: 'e6',
			title: 'New Keyboard',
			amount: 100,
			date: new Date(2022, 12, 12),
		},
		{
			id: 'e7',
			title: 'Lenovo Tablet',
			amount: 3000,
			date: new Date(2023, 2, 2),
		},
		{
			id: 'e8',
			title: 'Lenovo Laptop',
			amount: 5000,
			date: new Date(2020, 10, 10),
		}
	];

	const [expenses, setExpenses] = useState(allExpenses);

	const saveHandler = (expense) => {
		setExpenses([expense, ...expenses]);
	}

      return (
        <div className="App">
	  	<NewExpense onSaveData={saveHandler}/>
		<Expense expenses={expenses}/>
        </div>
      );
    }
    
    export default App;
    