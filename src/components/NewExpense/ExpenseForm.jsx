import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props){
      const [titleChange, setTitle] = useState('');
      const [amountChange, setAmount] = useState('');
      const [dateChange, setDate] = useState('');

      const titleChangeHandler = (event) => {
            setTitle(event.target.value);
      }

      const amountChangeHandler = (event) => {
            setAmount(event.target.value);
      }

      const dateChangeHandler = (event) => {
            setDate(event.target.value);
      }

      const submitHandler = (event) => {
            event.preventDefault();             //doesn't refresh on submit

            const expenseData = {
                  title : titleChange,
                  amount : amountChange,
                  date : new Date(dateChange)
            };
            props.onSaveData(expenseData);
            setAmount('');
            setDate('');
            setTitle('');
      }

      return (
            <form onSubmit={submitHandler}>
                  <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                              <label>Title</label>
                              <input 
                                    type='text' 
                                    onChange={titleChangeHandler} 
                                    value={titleChange}
                              />
                        </div>
                        <div className='new-expense__control'>
                              <label>Amount</label>
                              <input 
                                    type='number' 
                                    min='0.01' 
                                    onChange={amountChangeHandler} 
                                    value={amountChange}
                              />
                        </div>
                        <div className='new-expense__control'>
                              <label>Date</label>
                              <input 
                                    type='date' 
                                    min='2019-01-01' 
                                    max='2023-01-26' 
                                    onChange={dateChangeHandler} 
                                    value={dateChange}
                              />
                        </div>
                  </div>
                  <div className='new-expense__actions'>
                        <button type='submit' on>Add</button>
                  </div>
            </form>
      );
}

export default ExpenseForm;