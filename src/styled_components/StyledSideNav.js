import styled from "styled-components";
import colors from "../assets/js/colors";

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
