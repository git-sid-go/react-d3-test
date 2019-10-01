import React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import colors from "../assets/js/colors";

export const Flex = styled.div`
  display: flex;
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${props =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
`;

export const BtnPrimary = styled(props => (
  <Button variant="contained" classes={{ root: "root" }} {...props} />
))`
  background-color: ${colors.$primaryGreen};
  color: ${colors.$primaryWhite};
  width: 60px;
  font-size: 10px;
  padding: 4px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const TabsContainer = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.$primaryBorder};
  margin: 30px 0 25px;
  display: inline-flex;
  button {
    border-right: 1px solid ${colors.$primaryBorder};
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
      border-right: none;
    }
  }
`;

export const BtnTab = styled(props => (
  <Button variant="contained" classes={{ root: "root" }} {...props} />
))`
  background-color: ${colors.$primaryWhite};
  box-shadow: none;
  text-transform: none;
  border-radius: 0;
  font-size: 12px;
  padding: 5px 12px;
  &:hover {
    background-color: ${colors.$purpleLight};
    opacity: 0.8;
    color: ${colors.$primaryWhite};
  }
  ${props =>
    props.selected &&
    css`
      background-color: ${colors.$purpleLight};
      color: ${colors.$primaryWhite};
    `}
`;

export const StyledAppLogo = styled.div`
  margin-right: 15px;
  img {
    width: 35px;
    height: auto;
    border-radius: 10px;
  }
`;

export const FlexWithSideNav = styled.div`
  padding-left: 260px;
`;

export const MainContent = styled.div`
  max-width: 1100px;
  margin: 15px auto;
`;
