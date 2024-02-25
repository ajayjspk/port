import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["DataBase", "Rating"],
  ["Mongo DB", 4],
  ["my SQL", 4],
];

export const options = {
//   title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#b49d00", "#ffab91"],
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
