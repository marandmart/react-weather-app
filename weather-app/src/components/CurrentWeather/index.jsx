import axios from "../../services/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/modules/city";

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  const { city } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const GetCurrentTemp = (query) => {
    var optionsCurrent = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: query,
        lat: "0",
        lon: "0",
        id: "2172797",
        lang: "null",
        units: '"metric"',
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "ed6b73da76msh2d2c86c34b0f22cp167909jsn2ba9674bf01f",
      },
    };

    axios
      .request(optionsCurrent)
      .then((response) => {
        const obj = response.data.main.temp;
        console.log(response.data);
        setCurrentWeather(Math.round(obj - 273) + "°C");
      })
      .catch((error) => {
        console.log(error);
        dispatch(setCity("Não existe, tente outra cidade"));
      });
  };

  useEffect(() => {
    GetCurrentTemp(city);
  }, [city]);

  return <h2>{currentWeather}</h2>;
};

export default CurrentWeather;
