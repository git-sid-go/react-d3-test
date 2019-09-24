import React from "react";
import SideNav from "../SideNav/SideNav";
import {
  FlexWithSideNav,
  MainContent
} from "../../styled_components/StyledCommon";
import StatsBar from "./blocks/StatsBar";
import SalesGraph from "./graphs/SalesGraph";

function Home() {
  return (
    <FlexWithSideNav>
      {/* <SideNav /> */}
      <MainContent>
        {/* <StatsBar /> */}
        <div>
          <SalesGraph />
        </div>
      </MainContent>
    </FlexWithSideNav>
  );
}

export default Home;
