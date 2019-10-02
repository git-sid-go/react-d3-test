import React, { Component } from "react";
import * as d3 from "d3";
import { StyledChartWrapper } from "../../../styled_components/StyledCharts";
import colors from "../../../assets/js/colors";

const width = 510;
const height = 210;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class AreaChart extends Component {
  state = {
    area: null,
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
    .tickFormat(d => `${d}`);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data, chart } = nextProps;
    const { xScale, yScale, areaGenerator } = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = d3.extent(data, d => d.date);
    const valueMax = d3.max(data, d => d[chart]);
    xScale.domain(timeDomain);
    yScale.domain([0, valueMax]);

    areaGenerator.x(d => xScale(d.date));
    areaGenerator.y0(yScale(0));
    areaGenerator.y1(d => yScale(d[chart]));
    const area = areaGenerator(data);

    return { area };
  }

  setAxes = () => {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  };

  initialiseOrUpdateChart = () => {
    d3.select(this.refs.area)
      .selectAll("path")
      .transition()
      .duration(1000)
      .ease(d3.easeCubicInOut)
      .attr("d", this.state.area)
      .attr("fill", `${colors.$areafill}`)
      .attr("stroke", `${colors.$stroke}`);
  };

  componentDidMount() {
    this.setAxes();
    this.initialiseOrUpdateChart();
  }

  componentDidUpdate() {
    this.setAxes();
    this.initialiseOrUpdateChart();
  }

  render() {
    return (
      <StyledChartWrapper>
        <div className="title">Sales</div>
        <div className="total">
          $413.79K
          <span className="average">Average $68.96K</span>
        </div>
        <svg width={width} height={height}>
          <g ref="area">
            <path strokeWidth="2" />
          </g>

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
