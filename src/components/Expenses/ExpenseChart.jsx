import Chart from "../Charts/Chart";
import React from "react";

const ExpenseChart = props => {
      const dataPoints = [
            {label:'Jan', value:0},
            {label:'Feb', value:0},
            {label:'Mar', value:0},
            {label:'Apr', value:0},
            {label:'May', value:0},
            {label:'Jun', value:0},
            {label:'Jul', value:0},
            {label:'Aug', value:0},
            {label:'Sep', value:0},
            {label:'Oct', value:0},
            {label:'Nov', value:0},
            {label:'Dec', value:0}
      ];

      for(const expense of props.filteredList){
            const expenseMonth = expense.date.getMonth();
            dataPoints[expenseMonth].value += expense.amount;
      }

      return (
            <Chart dataPoint={dataPoints}/>
      );
}

export default ExpenseChart;