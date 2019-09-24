import React from "react";
import * as d3 from "d3";

function SalesGraph() {
  const drawChart = () => {
    // const data = {
    //   "2013-04-26": 1000,
    //   "2013-04-27": 2000,
    //   "2013-04-28": 3000,
    //   "2013-04-29": 4000,
    //   "2013-04-30": 5000
    // };
    let margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    let svg = d3
      .select("#sales")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.csv(
      "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

      // When reading the csv, I must format variables:
      function(d) {
        return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value };
      },

      // Now I can use this dataset:
      function(data) {
        // Add X axis --> it is a date format
        var x = d3
          .scaleTime()
          .domain(
            d3.extent(data, function(d) {
              return d.date;
            })
          )
          .range([0, width]);
        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3
          .scaleLinear()
          .domain([
            0,
            d3.max(data, function(d) {
              return +d.value;
            })
          ])
          .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        // Add the line
        svg
          .append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr(
            "d",
            d3
              .line()
              .x(function(d) {
                return x(d.date);
              })
              .y(function(d) {
                return y(d.value);
              })
          );
      }
    );

    // svg
    //   .selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => 300 - 10 * d)
    //   .attr("width", 65)
    //   .attr("height", (d, i) => d * 10)
    //   .attr("fill", "green");

    // svg
    //   .selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .text(d => d)
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => 300 - 10 * d - 3);
  };

  React.useEffect(() => {
    drawChart();
  }, []);

  return <div id="sales"></div>;
}

export default SalesGraph;
