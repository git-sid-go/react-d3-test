import React from "react";
import { StyledSideNavWrapper } from "../../styled_components/StyledSideNav";
import Overview from "./blocks/Overview";

function SideNav() {
  return (
    <StyledSideNavWrapper>
      <Overview />
    </StyledSideNavWrapper>
  );
}

export default SideNav;
