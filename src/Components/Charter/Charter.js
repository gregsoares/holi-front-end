import React from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";

export const Charter = (props) => {
  return (
    <div className="text-black text-md font-sans ">
      {(props.chartType === "line" ? <LineChart labels={["One","Two","Three","Four","Five","Six","Seven"]} />: "")}
      {(props.chartType === "bar" ? <BarChart />: "")}
      {(props.chartType === "doughnut" ? <DoughnutChart />: "")}
    </div>
  );
};
