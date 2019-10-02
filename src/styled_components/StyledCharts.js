import React from "react";
import styled, { css } from "styled-components";
import colors from "../assets/js/colors";
import { Paper } from "@material-ui/core";

export const StyledChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledChartWrapper = styled(props => (
  <Paper elevation={0} {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin: 0 0 20px 0;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.$textGrey};
    opacity: 0.8;
  }
  .total {
    font-family: ${colors.$montserrat};
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0 20px;
    .average {
      font-size: 12px;
      color: ${colors.$purpleLight};
      margin-left: 7px;
    }
  }
`;
