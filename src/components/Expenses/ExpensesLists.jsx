import React from "react";
import Item from "./Item";
import './ExpensesLists.css';


const ExpensesLists = props => {
      const filteredList = props.listData.filter((item) => props.filterYear===item.date.getFullYear());
      if(props.filterYear===0){
            return (
                  <li>
                        {props.listData.map((expense) => (
                              <Item
                                    key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                                    year={props.filterYear}
                              />
                        ))}
                  </li>
            );
      }
      else{
            if(filteredList.length === 0){
                  return(
                        <ul className="expenses-list__fallback">
                              <h2>No Items Found</h2>
                        </ul>
                  );
            }
            return (
                  <li>
                        {filteredList.map((expense) => (
                              <Item
                                    key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                                    year={props.filterYear}
                              />
                        ))}
                  </li>
            );
      }
      
}


export default ExpensesLists;