import axios from "../../services/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeather, setBackground } from "../../redux/modules/city";

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  const { city } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const GetCurrentTemp = (query) => {
    var options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
      params: { q: query, cnt: "7", units: "metric" },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "ed6b73da76msh2d2c86c34b0f22cp167909jsn2ba9674bf01f",
      },
    };

    axios
      .request(options)
      .then((response) => {
        const max = response.data.list[0].temp.max;
        const min = response.data.list[0].temp.min;
        dispatch(setBackground(response.data.list[0].weather[0].main));
        dispatch(setWeather(response.data.list.slice(1)));
        setCurrentWeather(
          "Max: " +
            Math.round(max) +
            "°C" +
            ", " +
            "Min: " +
            Math.round(min) +
            "°C"
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(setCity("Não existe, tente outra cidade"));
      });
  };

  useEffect(() => {
    GetCurrentTemp(city);
    // eslint-disable-next-line
  }, [city]);

  return <h4>{currentWeather}</h4>;
};

export default CurrentWeather;
