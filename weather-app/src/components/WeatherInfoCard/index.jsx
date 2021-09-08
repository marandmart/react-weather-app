import { useSelector } from "react-redux";
import { Card, WeatherValue, Day } from "./styles";
import { DAYNAMES } from "../CurrentDate";

const WeatherInfoCard = () => {
  const { weather } = useSelector((state) => state.city);
  const today = new Date().getDay();
  const days = DAYNAMES.slice(today + 1).concat(DAYNAMES.slice(0, today));

  return (
    <>
      {weather.map((day, index) => (
        <Card key={index}>
          <Day>{days[index]}</Day>
          <WeatherValue>Max: {Math.round(day.temp.max)}</WeatherValue>
          <WeatherValue>Min: {Math.round(day.temp.min)}</WeatherValue>
        </Card>
      ))}
    </>
  );
};

export default WeatherInfoCard;
