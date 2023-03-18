import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


function NewExpense(props){
      function changeHandler(enteredData){
            const arr = {
                  id:Math.random().toString(),
                  ...enteredData
            }
            props.onSaveData(arr);
      }

      return (
            <div className='new-expense'>
                  <ExpenseForm onSaveData={changeHandler}/>
            </div>
      );
}

export default NewExpense;