import React from "react";
import Item from "./Item";
import './ExpensesLists.css';


const ExpensesLists = props => {
      return (
            <ul className="expenses-list">
                  {props.listData.map((expense) => (
                        <Item 
                              key={expense.id}
                              title={expense.title}
                              amount={expense.amount}
                              date={expense.date}
                              year={props.filterYear}
                        />
                  ))}
            </ul>
      );
}


export default ExpensesLists;