import { WeatherInfoCard, Button } from "../../components";
import {
  Wrapper,
  Header,
  ButtonWrapper,
  SearchField,
  DayWeekCards,
} from "./styles";

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <div></div>
        <ButtonWrapper>
          <Button active={false}>Hoje</Button>
          <Button active={true}>Semana</Button>
        </ButtonWrapper>
        <SearchField placeholder="Cidade" />
      </Header>
      <div>
        <h1>29°C</h1>
        <h1>Domingo</h1>
      </div>
      <DayWeekCards>
        <WeatherInfoCard />
      </DayWeekCards>
    </Wrapper>
  );
};

export default Main;
