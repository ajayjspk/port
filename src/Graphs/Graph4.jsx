import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["WEB", "Rating"],
  ["HTML", 5],
  ["CSS", 5],
  ["JAva Script", 4],
  ["React JS", 4],
  ["Node JS", 4],
];

export const options = {
//   title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#2f8f2c", "#ffab91"],
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
      height="300px"
      data={data}
      options={options}
    />
  );
}
