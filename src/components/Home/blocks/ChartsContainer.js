import React from "react";
import AreaChart from "../charts/AreaChart";
import moment from "moment";
import { StyledChartsContainer } from "../../../styled_components/StyledCharts";
import { BtnTab, TabsContainer } from "../../../styled_components/StyledCommon";

function ChartsContainer() {
  const [currentTab, setCurrentTab] = React.useState("daily");
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    let daily = [];
    for (var i = 1; i <= moment.duration(2, "months").asDays(); i++) {
      daily.push({
        date: moment().subtract(i + 1, "d"),
        sales: Math.floor(Math.random() * (6000 - 0 + 1)) + 0
      });
    }
    setData({
      daily
    });
  }, []);
  return (
    <div>
      <TabsContainer>
        <BtnTab>Daily</BtnTab>
        <BtnTab>3 Months</BtnTab>
        <BtnTab>6 Months</BtnTab>
        <BtnTab>12 Months</BtnTab>
      </TabsContainer>
      <StyledChartsContainer>
        <AreaChart data={data.daily} />
        <AreaChart data={data.daily} />
        <AreaChart data={data.daily} />
        <AreaChart data={data.daily} />
      </StyledChartsContainer>
    </div>
  );
}

export default ChartsContainer;
