import { CardRow, Card, Weather, HourWeek } from "./styles";

const WeatherInfoCard = () => {
  return (
    <CardRow>
      <Card>
        <Weather>25°C</Weather>
        <HourWeek>Segunda</HourWeek>
      </Card>
      <Card>
        <Weather>30°C</Weather>
        <HourWeek>Terça</HourWeek>
      </Card>
      <Card>
        <Weather>28°C</Weather>
        <HourWeek>Quarta</HourWeek>
      </Card>
      <Card>
        <Weather>23°C</Weather>
        <HourWeek>Quinta</HourWeek>
      </Card>
      <Card>
        <Weather>21°C</Weather>
        <HourWeek>Sexta</HourWeek>
      </Card>
    </CardRow>
  );
};

export default WeatherInfoCard;
