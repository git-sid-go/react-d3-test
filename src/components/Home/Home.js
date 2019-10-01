import React from "react";
import SideNav from "../SideNav/SideNav";
import {
  FlexWithSideNav,
  MainContent
} from "../../styled_components/StyledCommon";
import StatsBar from "./blocks/StatsBar";
import ChartsContainer from "./blocks/ChartsContainer";

function Home() {
  return (
    <FlexWithSideNav>
      <SideNav />
      <MainContent>
        <StatsBar />
        <ChartsContainer />
      </MainContent>
    </FlexWithSideNav>
  );
}

export default Home;
