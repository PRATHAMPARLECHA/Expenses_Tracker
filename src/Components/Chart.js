import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
    let maxi = dataPoints.map(dataPoint => dataPoint.value)
    let maximum = Math.max(...maxi)
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
