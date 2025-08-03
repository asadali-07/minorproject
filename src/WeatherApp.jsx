import SearchBox from "./SearchBox";
import InfooBox from "./InfooBox";
import { useState } from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    city: "Delhi",
    description: "haze",
    feelLike: 40.31,
    humidity: 55,
    temp: 34.05,
    tempMax: 34.05,
    tempMin: 34.05,
  });
  const updateWeather = (newInfo) => {
    setWeather(newInfo);
  };
  return (
    <>
      <h1 style={{ color: "rgb(25,118,210)" }}>
        iWeather
        <ThunderstormIcon fontSize="large" />
      </h1>
      <SearchBox updateWeather={updateWeather} />
      <InfooBox weather={weather} />
    </>
  );
};

export default WeatherApp;
