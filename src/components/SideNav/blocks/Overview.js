import React from "react";
import {
  Flex,
  BtnPrimary,
  StyledAppLogo
} from "../../../styled_components/StyledCommon";
import {
  StyledName,
  StyledOverview,
  StyledEmail
} from "../../../styled_components/StyledSideNav";
import LogoImg from "../../../assets/images/logo.svg";

function Overview() {
  return (
    <StyledOverview>
      <Flex alignCenter>
        <StyledAppLogo className="icon">
          <img src={LogoImg} />
        </StyledAppLogo>
        <Flex column>
          <StyledName>
            Siddharth <span className="badge">Test</span>
          </StyledName>
          <StyledEmail>siddhuvaradan@gmail.com</StyledEmail>
          <BtnPrimary>Go Live</BtnPrimary>
        </Flex>
      </Flex>
    </StyledOverview>
  );
}

export default Overview;
