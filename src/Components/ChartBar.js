import "./ChartBar.css";

const ChartBar = ({ value, maxValue,label}) => {
    let maximumValue = '0%';
    if(maxValue > 0){
        maximumValue =  Math.round((value/maxValue) * 100) +'%'
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: maximumValue}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
