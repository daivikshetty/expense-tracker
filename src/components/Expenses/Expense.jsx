import React, {useState} from 'react';
import Item from './Item';
import './Expenses.css';
import './Item.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';


function Expense(props){
      const [fYear, setYear] = useState(2022);
      const receivedProp = filterYear => {
            filterYear = parseInt(filterYear);
            setYear(filterYear);
      }

      return (
            <div>
                  <Card className="expenses">
                        <ExpensesFilter onReceiveData={receivedProp}/>
                        <Item 
                              title={props.expenses[0].title}
                              amount={props.expenses[0].amount}
                              date={props.expenses[0].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[1].title} 
                              amount={props.expenses[1].amount} 
                              date={props.expenses[1].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[2].title} 
                              amount={props.expenses[2].amount} 
                              date={props.expenses[2].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[3].title} 
                              amount={props.expenses[3].amount} 
                              date={props.expenses[3].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[4].title} 
                              amount={props.expenses[4].amount} 
                              date={props.expenses[4].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[5].title} 
                              amount={props.expenses[5].amount} 
                              date={props.expenses[5].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[6].title} 
                              amount={props.expenses[6].amount} 
                              date={props.expenses[6].date}
                              year={fYear}
                        />
                        <Item 
                              title={props.expenses[7].title} 
                              amount={props.expenses[7].amount} 
                              date={props.expenses[7].date}
                              year={fYear}
                        />
                  </Card>
            </div>
      );
}

export default Expense;