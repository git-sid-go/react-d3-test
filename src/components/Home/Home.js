import React from "react";
import SideNav from "../SideNav/SideNav";
import {
  FlexWithSideNav,
  MainContent
} from "../../styled_components/StyledCommon";
import StatsBar from "./blocks/StatsBar";

function Home() {
  return (
    <FlexWithSideNav>
      <SideNav />
      <MainContent>
        <StatsBar />
      </MainContent>
    </FlexWithSideNav>
  );
}

export default Home;
