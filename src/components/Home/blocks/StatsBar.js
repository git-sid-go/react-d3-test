import React from "react";
import { StyledStatsBar } from "../../../styled_components/StyledHome";
import StatBox from "./StatBox";
import { MockStats } from "../../../mock/MockData";

function StatsBar() {
  return (
    <StyledStatsBar>
      {Object.keys(MockStats).map((stat, index) => (
        <StatBox
          key={index}
          label={stat}
          value={MockStats[stat].value}
          suffix={MockStats[stat].suffix ? MockStats[stat].suffix : false}
        />
      ))}
    </StyledStatsBar>
  );
}

export default StatsBar;
