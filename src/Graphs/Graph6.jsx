import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Languages", "Rating"],
  ["Team Work", 5],
  [" Leadership", 4],
  ["Event Management", 5],
];

export const options = {
//   title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#be4dff", "#ffab91"],
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
      height="170px"
      data={data}
      options={options}
    />
  );
}
