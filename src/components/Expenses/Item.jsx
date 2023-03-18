import './Item.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function Item(props){
      const [title, setTitle] = useState(props.title);

      if(props.year === props.date.getYear() + 1900 || props.year===0){
            return (
                  <Card className="expense-item">
                        <ExpenseDate date={props.date} />
                        <div className="expense-item__description">
                             <h2>{title}</h2>
                              <div className="expense-item__price">
                                    {props.amount}
                              </div>
                        </div>
                  </Card>
            );
      }
      else{
            return;
      }
      
}

export default Item;