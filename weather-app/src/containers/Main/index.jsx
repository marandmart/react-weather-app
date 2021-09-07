import { WeatherInfoCard, Button, Clock, CurrentDate } from "../../components";
import {
  Wrapper,
  Header,
  ButtonWrapper,
  SearchField,
  SearchArea,
  CurrentDay,
  DayWeekCards,
} from "./styles";

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <ButtonWrapper>
          <Button active={false}>Hoje</Button>
          <Button active={true}>Semana</Button>
        </ButtonWrapper>
        <SearchArea>
          <SearchField placeholder="Cidade" />
          <SearchField type="Submit" value="Enviar" />
        </SearchArea>
      </Header>
      <CurrentDay>
        <h2>29°C</h2>
        <CurrentDate />
        <Clock />
      </CurrentDay>
      <DayWeekCards>
        <WeatherInfoCard />
      </DayWeekCards>
    </Wrapper>
  );
};

export default Main;
