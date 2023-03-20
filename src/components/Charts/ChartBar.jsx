import './ChartBar.css';

const ChartBar = props => {
      let barFill = '0%'; // string because it has to be rendered as a css style

      if(props.maxValue > 0){
            barFill = (props.value/props.maxValue)*100 + '%';
            console.log(barFill);
      }

      return (
            <div className='chart-bar'>
                  <div className='chart-bar__inner'>
                        <div className='chart-bar__fill' style={{height : barFill}}></div>
                  </div>
                  <div className='chart-bar__label'>{props.label}</div>
            </div>
      );
}

export default ChartBar;