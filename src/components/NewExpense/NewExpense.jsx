import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



function NewExpense(props){
      const [isEditing, setIsEditing] = useState(false);
      
      const onEditHandler = () => {
            setIsEditing(true);
      }

      const onCancelHandler = () => {
            setIsEditing(false);
      }

      function changeHandler(enteredData){
            const arr = {
                  id:Math.random().toString(),
                  ...enteredData
            }
            props.onSaveData(arr);
            setIsEditing(false);
      }

      return (
            <div className='new-expense'>
                  {!isEditing && <button onClick={onEditHandler}>Add New Expense</button>}
                  {isEditing && <ExpenseForm onSaveData={changeHandler} onCancelForm={onCancelHandler}/>}
            </div>
      );
}

export default NewExpense;