import styled from "styled-components";
import colors from "../assets/js/colors";

export const StyledStatsBar = styled.div`
  padding: 15px;
  border-radius: 7px;
  color: ${colors.$primaryWhite};
  background-color: ${colors.$primaryPurple};
  display: flex;
`;

export const StyledStatBox = styled.div`
  margin-right: 15px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  flex: 1;
  padding: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child {
    margin-right: 0;
  }
  .label {
    max-width: 90px;
    line-height: 1.4;
    font-weight: 500;
    opacity: 0.7;
  }
  .value {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    font-family: ${colors.$montserrat};
    span {
      margin-left: 10px;
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;
