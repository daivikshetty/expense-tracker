import React, {useState, useEffect} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import { db } from './firebase-config';
import { collection, getDocs, addDoc} from 'firebase/firestore';

function App() {
	const [expenses, setExpenses] = useState([]);
	const expenseInfo = collection(db, "expenses");

	useEffect(() => {
		const getExpenses = async () => {
			try{
				const data = await getDocs(expenseInfo);
				setExpenses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
			}
			catch(err){
				console.log(err);
			}
		}
		getExpenses();
	},[expenseInfo]);

	const saveHandler = async (expense) => {
		await addDoc(expenseInfo, {title:expense.title, id:expense.id, date:expense.date, amount:expense.amount});
	}

	const allExpenses = expenses.map((exp) => ({
		id:exp.id,
		amount:exp.amount,
		date:exp.date.toDate(),
		title:exp.title
	}));

      return (
        <div className="App">
	  	<NewExpense onSaveData={saveHandler}/>
		<Expense expenses={allExpenses}/>
        </div>
      );
    }
    
    export default App;
    