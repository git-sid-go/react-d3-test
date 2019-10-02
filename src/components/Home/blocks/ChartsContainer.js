import React from "react";
import AreaChart from "../charts/AreaChart";
import moment from "moment";
import { StyledChartsContainer } from "../../../styled_components/StyledCharts";
import { BtnTab, TabsContainer } from "../../../styled_components/StyledCommon";
import { RANGE_CONFIG } from "../../../config/config";

const CHARTS = ["sales", "new_sales", "payments", "refunds"];

function ChartsContainer() {
  const [currentTab, setCurrentTab] = React.useState("daily");
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    let daily = [];
    for (var i = 1; i <= moment.duration(2, "months").asDays(); i++) {
      daily.push({
        date: moment().subtract(i + 1, "d"),
        sales:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.daily.sales.max - RANGE_CONFIG.daily.sales.min + 1)
          ) + RANGE_CONFIG.daily.sales.min,
        new_sales:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.daily.new_sales.max -
                RANGE_CONFIG.daily.new_sales.min +
                1)
          ) + RANGE_CONFIG.daily.new_sales.min,
        payments:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.daily.payments.max -
                RANGE_CONFIG.daily.payments.min +
                1)
          ) + RANGE_CONFIG.daily.payments.min,
        refunds:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.daily.refunds.max -
                RANGE_CONFIG.daily.refunds.min +
                1)
          ) + RANGE_CONFIG.daily.refunds.min
      });
    }
    setData({
      daily
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
          onClick={() => setCurrentTab("3 months")}
          selected={currentTab == "3 months"}
        >
          3 Months
        </BtnTab>
        <BtnTab
          onClick={() => setCurrentTab("6 months")}
          selected={currentTab == "6 months"}
        >
          6 Months
        </BtnTab>
        <BtnTab
          onClick={() => setCurrentTab("12 months")}
          selected={currentTab == "12 months"}
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
        ) : null}
      </StyledChartsContainer>
    </div>
  );
}

export default ChartsContainer;
