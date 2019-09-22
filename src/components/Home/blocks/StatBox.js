import React from "react";
import { StyledStatBox } from "../../../styled_components/StyledHome";

function StatBox({ label, value, suffix }) {
  return (
    <StyledStatBox>
      <div className="label">{label}</div>
      <div className="value">
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
    </StyledStatBox>
  );
}

export default StatBox;
