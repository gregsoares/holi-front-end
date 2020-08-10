import React from "react";
import { Bar } from "chartjs-2";
import { USData } from "./covidAPI";

export const BarChart = (props) => {
  return (
    <div data-testid="BarChartContainer">
      {/* TODO: Make use of US data and load it onto Bar chart */}
      {/* TODO: Load overall data in superimposed linechart  */}
      {/* w-xsmall, diff colors between bar <> line  */}
      <div className="flex max-w-2xl p-0 mx-2" id="BarChartContainer">
        {USData.length !== 0 ? (
          <Bar
            data={{
              labels: [JSON.stringify(USData[0].date).slice(6, 8)],
              datasets: [
                {
                  label: "Positive (daily)",
                  data: USData[0].positive,
                },
              ],
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
