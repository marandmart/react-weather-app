import {
  WeatherInfoCard,
  CurrentDate,
  CurrentWeather,
  Cidade,
} from "../../components";
import {
  Wrapper,
  SearchField,
  CurrentDay,
  WeekInfo,
  imagesBackground,
} from "./styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../redux/modules/city";

const Main = () => {
  const dispatch = useDispatch();
  const { city, weather, background } = useSelector((state) => state.city);
  const [cityInput, setCityInput] = useState("");

  const getBackground = (str) => {
    const searchFor = str.toLowerCase();
    return "url(" + imagesBackground[searchFor] + ")";
  };

  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleInputSubmit = () => {
    if (cityInput) {
      dispatch(setCity(cityInput.charAt(0).toUpperCase() + cityInput.slice(1)));
      setCityInput("");
    }
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
    <Wrapper
      style={{
        backgroundImage: getBackground(background),
      }}
    >
      <SearchField
        placeholder="Cidade"
        size="40"
        value={cityInput}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <CurrentDay>
        <Cidade>{city}</Cidade>
        <CurrentDate />
        <CurrentWeather />
      </CurrentDay>
      <WeekInfo>
        <WeatherInfoCard weather={weather} />
      </WeekInfo>
    </Wrapper>
  );
};

export default Main;
