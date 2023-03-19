import React, {useState} from 'react';
import './Expenses.css';
import './Item.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import ExpensesLists from './ExpensesLists';


function Expense(props){
      const [fYear, setYear] = useState(0);
      const receivedProp = filterYear => {
            filterYear = parseInt(filterYear);
            setYear(filterYear);
      }

      return (
            <div>
                  <Card className="expenses">
                        <ExpensesFilter onReceiveData={receivedProp}/>
                        <ul className='expenses-list'>
                              <ExpensesLists listData={props.expenses} filterYear={fYear}/>
                        </ul>
                  </Card>
            </div>
      );
}

export default Expense;