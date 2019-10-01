import React from "react";
import AreaChart from "../charts/AreaChart";

function ChartsContainer() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    console.log(`${process.env.PUBLIC_URL}weather.json`);
    Promise.all([fetch(`${process.env.PUBLIC_URL}/weather_1.json`)])
      .then(responses => Promise.all(responses.map(resp => resp.json())))
      .then(([daily]) => {
        daily.forEach(day => (day.date = new Date(day.date)));
        let remoteData = { daily };
        console.log(remoteData);
        setData(remoteData);
      });
  }, []);
  return (
    <div>
      <AreaChart data={data.daily} />
    </div>
  );
}

export default ChartsContainer;
