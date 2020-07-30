import React from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";

export const Charter = (props) => {
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
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Something for 2020 (M)",
        data: [2, 3, 4, 3, 5, 2, 4],
        borderColor: ["blue"],
        pointBackgroundColor: "black",
      },
      {
        label: "Something for 2020 (M)",
        data: [4, 3, 3, 2, 4, 2, 3],
        borderColor: ["rgba(234,206,96,0.5)"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
      {
        label: "Something for 2020 (M)",
        data: [3, 2, 1, 1, 3, 4, 3],
        borderColor: ["red"],
        pointBackgroundColor: "black",
      },
    ],
  };
  return (
    <div className="text-black text-md font-sans ">
      {(props.chartType === "line" ? <LineChart />: "")}
      {(props.chartType === "bar" ? <BarChart />: "")}
      {(props.chartType === "doughnut" ? <DoughnutChart />: "")}
    </div>
  );
};
