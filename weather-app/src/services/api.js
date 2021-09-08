var axios = require("axios").default;

export var optionsCurrent = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "Maceio,BR",
    lat: "0",
    lon: "0",
    callback: "test",
    id: "2172797",
    lang: "pt",
    units: '"metric"',
    mode: "xml, html",
  },
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "ed6b73da76msh2d2c86c34b0f22cp167909jsn2ba9674bf01f",
  },
};

export var optionsWeekly = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
  params: {
    q: "maceio,br",
    lat: "-9.656004",
    lon: "-35.710027",
    cnt: "7",
    units: "metric",
  },
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "ed6b73da76msh2d2c86c34b0f22cp167909jsn2ba9674bf01f",
  },
};

export default axios;
