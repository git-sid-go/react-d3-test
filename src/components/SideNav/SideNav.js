import React from "react";
import {
  StyledSideNavWrapper,
  StyledSideMenuItem,
  MenuItemsContainer
} from "../../styled_components/StyledSideNav";
import Overview from "./blocks/Overview";
import { SIDE_NAV_ITEMS } from "../../properties/properties";
import ChevronDown from "../../assets/images/chevron-down.svg";
import GetStartedIcon from "../../assets/images/get-started.svg";
import RightArrowIcon from "../../assets/images/right-arrow.svg";

function SideNav() {
  return (
    <StyledSideNavWrapper>
      <Overview />
      <StyledSideMenuItem purple="true">
        <img src={GetStartedIcon} />
        Get Started
        <img className="right" src={RightArrowIcon} />
      </StyledSideMenuItem>
      <MenuItemsContainer>
        {SIDE_NAV_ITEMS.map((menu, index) => (
          <StyledSideMenuItem key={index}>
            <img src={menu.icon} />
            {menu.name}
            {menu.isDropdown && <img className="chevron" src={ChevronDown} />}
          </StyledSideMenuItem>
        ))}
      </MenuItemsContainer>
    </StyledSideNavWrapper>
  );
}

export default SideNav;
