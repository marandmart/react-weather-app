import {
  WeatherInfoCard,
  Clock,
  CurrentDate,
  CurrentWeather,
  Cidade,
} from "../../components";
import {
  Wrapper,
  Header,
  SearchField,
  SearchArea,
  CurrentDay,
  DayWeekCards,
} from "./styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../redux/modules/city";

const Main = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.city);
  const [cityInput, setCityInput] = useState("");

  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleInputSubmit = () => {
    dispatch(setCity(cityInput.charAt(0).toUpperCase() + cityInput.slice(1)));
    setCityInput("");
  };

  useEffect(() => {
    function onEnter(e) {
      if (e.keyCode === 13) handleInputSubmit();
    }

    window.addEventListener("keydown", onEnter);
    return () => {
      window.removeEventListener("keydown", onEnter);
    };
  });

  return (
    <Wrapper>
      <Header>
        <SearchArea>
          <SearchField
            placeholder="Cidade"
            size="40"
            value={cityInput}
            onChange={handleInputChange}
            onSubmit={handleInputSubmit}
          />
        </SearchArea>
      </Header>
      <CurrentDay>
        <CurrentWeather />
        <Cidade>{city}</Cidade>
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
