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
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0 0 20px 0;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1);
`;
