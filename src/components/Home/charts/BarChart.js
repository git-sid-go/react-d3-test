import React, { Component } from "react";
import * as d3 from "d3";
import { StyledChartWrapper } from "../../../styled_components/StyledCharts";

const width = 510;
const height = 270;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class BarChart extends Component {
  state = {
    bars: [],
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top])
  };

  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .tickFormat(d3.timeFormat("%b"));

  yAxis = d3
    .axisLeft()
    .scale(this.state.yScale)
    .ticks(5)
    .tickFormat(d => `${d}`);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data, chart } = nextProps;
    const { xScale, yScale } = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = d3.extent(data, d => d.date);
    const valueMax = d3.max(data, d => d[chart]);
    const colorDomain = d3.extent(data, d => d.avg);
    xScale.domain(timeDomain);
    yScale.domain([0, valueMax]);

    // calculate x and y for each rectangle
    const bars = data.map(d => {
      const y1 = yScale(d[chart]);
      const y2 = yScale(0);
      return {
        x: xScale(d.date),
        y: y1,
        height: y2 - y1
        // fill: colors(colorScale(d.avg))
      };
    });

    return { bars };
  }

  setAxes = () => {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  };

  componentDidMount() {
    this.setAxes();
  }

  componentDidUpdate() {
    this.setAxes();
  }

  render() {
    return (
      <StyledChartWrapper>
        <svg width={width} height={height}>
          {this.state.bars.map((d, i) => (
            <rect
              key={i}
              x={d.x}
              y={d.y}
              width="2"
              height={d.height}
              // fill={d.fill}
            />
          ))}
          <g>
            <g
              ref="xAxis"
              transform={`translate(0, ${height - margin.bottom})`}
            />
            <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
          </g>
        </svg>
      </StyledChartWrapper>
    );
  }
}

export default BarChart;
