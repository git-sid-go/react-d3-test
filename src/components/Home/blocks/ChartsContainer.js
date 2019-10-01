import React from "react";
import AreaChart from "../charts/AreaChart";
import moment from "moment";
import { StyledChartsContainer } from "../../../styled_components/StyledCharts";

function ChartsContainer() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let daily = [];

    for (var i = 1; i <= moment.duration(2, "months").asDays(); i++) {
      daily.push({
        date: moment().subtract(i + 1, "d"),
        sales: Math.floor(Math.random() * (6000 - 0 + 1)) + 0
      });
    }

    // console.log(moment.duration(4, "weeks").days());
    console.log(daily);
    setData(daily);
  }, []);
  return (
    <StyledChartsContainer>
      <AreaChart data={data} />
      <AreaChart data={data} />
      <AreaChart data={data} />
      <AreaChart data={data} />
    </StyledChartsContainer>
  );
}

export default ChartsContainer;
