import styled, { css } from "styled-components";
import colors from "../assets/js/colors";
import { MenuItem } from "@material-ui/core";

export const StyledSideNavWrapper = styled.div`
  padding: 15px 10px;
  width: 260px;
  height: 100vh;
  background-color: ${colors.$primaryWhite};
  box-shadow: 2px 0 5px 3px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledName = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  .badge {
    background-color: #dca451;
    padding: 3px 5px;
    margin-left: 3px;
    font-size: 12px;
    border-radius: 2px;
  }
`;

export const StyledOverview = styled.div`
  color: ${colors.$primaryWhite};
  background-color: ${colors.$primaryPurple};
  padding: 10px 15px;
  border-radius: 7px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const StyledEmail = styled.div`
  opacity: 0.7;
  font-size: 12px;
  margin: 5px 0 7px;
`;

export const StyledSideMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  font-size: 14px;
  min-height: 36px;
  color: ${colors.$textGrey};
  font-weight: 500;
  position: relative;
  img {
    height: 16px;
    width: auto;
    margin-right: 15px;
    &.chevron {
      width: 10px;
      height: auto;
      position: absolute;
      right: 0;
      top: 13px;
      opacity: 0.35;
    }
    &.right {
      position: absolute;
      right: 0;
      max-width: 16px;
      height: auto;
    }
  }
  ${props =>
    props.purple &&
    css`
      color: ${colors.$primaryPurple};
      margin: 30px 0 0;
    `}
`;

export const MenuItemsContainer = styled.div`
  border-top: 1px solid ${colors.$primaryGrey};
  padding: 7px 0;
`;
