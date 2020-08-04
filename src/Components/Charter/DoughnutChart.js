import React from "react";
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = props => {
  const doughnutOptions = {
    title: {
      display: true,
      text: "Doughnut Chat",
    },
  };
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Something for 2020 (M)",
        data: [2, 3, 4, 3, 5, 2, 4],
        backgroundColor: ["#1b3945","#d6000d","#6897bb","blue","#f9e9d2","#ffaf9a","gray"],
      }
    ]
  };
  return (
      <div className="border-2 border-gray-600 border-dashed" id="DoughnutChartContainer">
        <Doughnut data={chartData} options={doughnutOptions} />
    </div>
  );
};
