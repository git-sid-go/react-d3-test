import React, { Component } from "react";
import * as d3 from "d3";
import { StyledChartWrapper } from "../../../styled_components/StyledCharts";
import colors from "../../../assets/js/colors";

const width = 510;
const height = 210;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class BarChart extends Component {
  state = {
    bars: [],
    line: null,
    xScale: d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.4),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line()
  };

  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .tickFormat(d => `${d}`);

  yAxis = d3
    .axisLeft()
    .scale(this.state.yScale)
    .ticks(5)
    .tickFormat(d => {
      return d >= 1000 ? `${d / 1000}k` : `${d}`;
    });

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data, chart } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = data.map(d => d.month);
    const valueMin = d3.min(data, d => d[chart].amount);
    const valueMax = d3.max(data, d => d[chart].amount);
    xScale.domain(timeDomain);
    yScale.domain([valueMin, valueMax]);

    // calculate x and y for each rectangle
    const bars = data.map(d => {
      const y1 = yScale(d[chart].amount);
      const y2 = yScale(valueMin);
      return {
        x: xScale(d.month),
        y: y1 - height * 0.1,
        height: y2 - y1 + height * 0.1,
        width: (width - width * 0.45) / data.length
      };
    });

    lineGenerator.x(d => xScale(d.month));
    lineGenerator.y(d =>
      yScale(Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin)
    );

    const line = lineGenerator(data);

    return { line, bars };
  }

  setAxes = () => {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  };

  initialiseOrUpdateCharts = () => {
    d3.select(this.refs.bars)
      .selectAll("rect")
      .data(this.state.bars)
      .transition()
      .duration(1000)
      .ease(d3.easeCubicInOut)
      .attr("x", d => d.x)
      .attr("width", d => d.width)
      .attr("fill", `${colors.$barfill}`);

    d3.select(this.refs.line)
      .selectAll("path")
      .transition()
      .duration(1000)
      .ease(d3.easeCubicInOut)
      .attr("d", this.state.line)
      .attr("stroke", `${colors.$purpleLight}`);
  };

  componentDidMount() {
    this.setAxes();
    this.initialiseOrUpdateCharts();
  }

  componentDidUpdate() {
    this.setAxes();
    this.initialiseOrUpdateCharts();
  }

  render() {
    const { data } = this.props;
    return (
      <StyledChartWrapper>
        <div className="title">Sales</div>
        <div className="total">
          $413.79K
          <span className="average">Average $68.96K</span>
        </div>
        {data ? (
          <svg width={width} height={height}>
            <g ref="bars">
              {this.state.bars.map((d, i) => (
                <rect key={i} y={d.y} height={d.height} />
              ))}
            </g>

            <g ref="line">
              <path
                fill="none"
                strokeWidth="2"
                transform={`translate(${(width - width * 0.45) /
                  data.length /
                  2}, 0)`}
              />
            </g>

            <g>
              <g
                ref="xAxis"
                transform={`translate(0, ${height - margin.bottom})`}
              />
              <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
            </g>
          </svg>
        ) : null}
      </StyledChartWrapper>
    );
  }
}

export default BarChart;
