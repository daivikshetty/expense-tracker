import React, {useState} from 'react';
import './Expenses.css';
import './Item.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import ExpensesLists from './ExpensesLists';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
      const [fYear, setYear] = useState(0);
      const [filteredList, setFilteredList] = useState(props.expenses);

      const receivedProp = filterYear => {
            filterYear = parseInt(filterYear);
            setYear(filterYear);
            if(filterYear!==0){
                  const fList = props.expenses.filter((item) => filterYear===item.date.getFullYear());
                  setFilteredList(fList);
            }
            else{
                  setFilteredList(props.expenses);
            }
      }


      return (
      <div>
            <Card className="expenses">
                  <ExpensesFilter onReceiveData={receivedProp}/>
                  <ExpenseChart filteredList={filteredList}/>{/*send filteredList to ExpenseChart */}
                  <ul className='expenses-list'>
                        <ExpensesLists listData={props.expenses} filterYear={fYear}/>  {/* send props.expenses from ExpenseLists */}
                  </ul>
            </Card>
      </div>
      );
}

export default Expenses;
