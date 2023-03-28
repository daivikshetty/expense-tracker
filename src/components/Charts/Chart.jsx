import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
      const dataPointValues = props.dataPoint.map(data => data.value);
      const maxVal = dataPointValues.reduce((total, value) => total + value, 0); //find sum of dataPointValues

      return (
            <div className="chart">
                  {props.dataPoint.map(dataPoint => 
                        <ChartBar 
                              key={dataPoint.label} 
                              value={dataPoint.value} 
                              maxValue={maxVal} 
                              label={dataPoint.label}
                        />
                  )}
            </div>
      );
}

export default Chart;