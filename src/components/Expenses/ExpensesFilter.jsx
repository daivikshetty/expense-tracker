import React, {useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  function dropdownHandler(event){
    setCount(count+1);

    if(count%2!==0){
      let filterYear = event.target.value;
      props.onReceiveData(filterYear);
    }
  }

  const [count, setCount] = useState(0);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onClick={dropdownHandler}>
          <option value='0' onClick={dropdownHandler}>All</option>
          <option value='2023' onClick={dropdownHandler}>2023</option>
          <option value='2022' onClick={dropdownHandler}>2022</option>
          <option value='2021' onClick={dropdownHandler}>2021</option>
          <option value='2020' onClick={dropdownHandler}>2020</option>
          <option value='2019' onClick={dropdownHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;