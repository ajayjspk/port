import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["CS Core", "Rating"],
  ["OOPS", 4],
  ["Data Structures", 3],
];

export const options = {
//   title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#3e87f7", "#ffab91"],
  hAxis: {
    // title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    
  },
};

export default function Graph1() {
  return (
    <Chart
      chartType="BarChart"
      width="90%"
      height="100px"
      data={data}
      options={options}
    />
  );
}
