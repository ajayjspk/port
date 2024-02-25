import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Languages", "Rating"],
  ["C Language", 4],
  ["CPP", 3],
  ["Python", 5],
  ["JAVA", 4],
  ["SQL", 5],
];

export const options = {
//   title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#b0224a", "#ffab91"],
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
