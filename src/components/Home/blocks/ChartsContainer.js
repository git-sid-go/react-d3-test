import React from "react";
import AreaChart from "../charts/AreaChart";
import { StyledChartsContainer } from "../../../styled_components/StyledCharts";
import { BtnTab, TabsContainer } from "../../../styled_components/StyledCommon";
import BarChart from "../charts/BarChart";
import {
  getDailyMockData,
  getQuarterlyMockData,
  getSemiAnnualMockData,
  getAnnualMockData
} from "../../../helpers/helper_functions";

const CHARTS = ["sales", "new_sales", "payments", "refunds"];

function ChartsContainer() {
  const [currentTab, setCurrentTab] = React.useState("quarterly");
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    setData({
      daily: getDailyMockData(),
      quarterly: getQuarterlyMockData(),
      semi_annually: getSemiAnnualMockData(),
      annually: getAnnualMockData()
    });
  }, []);
  return (
    <div>
      <TabsContainer>
        <BtnTab
          onClick={() => setCurrentTab("daily")}
          selected={currentTab == "daily"}
        >
          Daily
        </BtnTab>
        <BtnTab
          onClick={() => setCurrentTab("quarterly")}
          selected={currentTab == "quarterly"}
        >
          3 Months
        </BtnTab>
        <BtnTab
          onClick={() => setCurrentTab("semi_annually")}
          selected={currentTab == "semi_annually"}
        >
          6 Months
        </BtnTab>
        <BtnTab
          onClick={() => setCurrentTab("annually")}
          selected={currentTab == "annually"}
        >
          12 Months
        </BtnTab>
      </TabsContainer>
      <StyledChartsContainer>
        {currentTab === "daily" ? (
          <>
            {CHARTS.map((chart, index) => (
              <React.Fragment key={index}>
                <AreaChart chart={chart} data={data.daily} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            {CHARTS.map((chart, index) => (
              <React.Fragment key={index}>
                <BarChart chart={chart} data={data[currentTab]} />
              </React.Fragment>
            ))}
          </>
        )}
      </StyledChartsContainer>
    </div>
  );
}

export default ChartsContainer;
