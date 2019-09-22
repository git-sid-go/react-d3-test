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
