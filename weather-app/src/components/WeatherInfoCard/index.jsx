import { CardRow, Card, Weather, DayHour } from "./styles";

const WeatherInfoCard = () => {
  return (
    <CardRow>
      <Card>
        <Weather>25°C</Weather>
        <DayHour>Segunda</DayHour>
      </Card>
      <Card>
        <Weather>30°C</Weather>
        <DayHour>Terça</DayHour>
      </Card>
      <Card>
        <Weather>28°C</Weather>
        <DayHour>Quarta</DayHour>
      </Card>
      <Card>
        <Weather>23°C</Weather>
        <DayHour>Quinta</DayHour>
      </Card>
      <Card>
        <Weather>21°C</Weather>
        <DayHour>Sexta</DayHour>
      </Card>
    </CardRow>
  );
};

export default WeatherInfoCard;
