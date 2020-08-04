import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = props => {
  const lineOptions = {
    title: {
      display: true,
      text: "Line Chat",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 7,
            stepSize: 2,
          },
        },
      ],
    },
  };
  const chartData = {
    labels: (props.labels !== "" ? props.labels : (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"])),
    datasets: [
      {
        label: "(M)",
        data: [2, 3, 4, 3, 5, 2, 4],
        borderColor: ["blue"],
        pointBackgroundColor: "black",
      },
      {
        label: "(M)",
        data: [4, 3, 3, 2, 4, 2, 3],
        borderColor: ["green"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
      {
        label: "(M)",
        data: [3, 2, 1, 1, 3, 4, 3],
        borderColor: ["red"],
        pointBackgroundColor: "black",
      },
    ],
  };
  return (
    <div>
      <div className="max-w-2xl" id="lineChartContainer">
        <Line data={chartData} options={lineOptions} />
      </div>
    </div>
  );
};
