import React, { Component } from "react";
import * as d3 from "d3";
import { StyledChartWrapper } from "../../../styled_components/StyledCharts";

const width = 510;
const height = 270;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class AreaChart extends Component {
  state = {
    line: null,
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    areaGenerator: d3.area()
  };

  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .ticks(5)
    .tickFormat(d3.timeFormat("%b %d"));

  yAxis = d3
    .axisLeft()
    .scale(this.state.yScale)
    .ticks(5)
    .tickFormat((d, i) => {
      console.log(d);
      return `$${d}`;
    });

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data } = nextProps;
    const { xScale, yScale, areaGenerator } = prevState;

    // data has changed, so recalculate scale domains
    console.log(data, data.length);
    const timeDomain = d3.extent(data, d => d.date);
    const valueMax = d3.max(data, d => d.sales);
    xScale.domain(timeDomain);
    yScale.domain([0, valueMax]);

    areaGenerator.x(d => xScale(d.date));
    areaGenerator.y0(yScale(0));
    areaGenerator.y1(d => yScale(d.sales));
    const line = areaGenerator(data);

    return { line };
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    return (
      <StyledChartWrapper>
        <svg width={width} height={height}>
          <path
            d={this.state.line}
            fill={"#F8E2CC"}
            stroke={"#E0A36F"}
            strokeWidth="2"
          />
          <g>
            <g
              ref="xAxis"
              transform={`translate(-5, ${height - margin.bottom})`}
            />
            <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
          </g>
        </svg>
      </StyledChartWrapper>
    );
  }
}

export default AreaChart;