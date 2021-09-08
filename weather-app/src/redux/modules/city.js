export const Types = {
  SET_CITY: "city/SET_CITY",
  SET_WEATHER: "city/SET_WEATHER",
  SET_BACKGROUND: "city/SET_BACKGROUND",
};

const initialState = {
  city: "Maceio",
  weather: [],
  background: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CITY:
      return { ...state, city: action.payload };
    case Types.SET_WEATHER:
      return { ...state, weather: action.payload };
    case Types.SET_BACKGROUND:
      return { ...state, background: action.payload };
    default:
      return state;
  }
}

export function setCity(city) {
  return {
    type: Types.SET_CITY,
    payload: city,
  };
}

export function setWeather(arr) {
  return {
    type: Types.SET_WEATHER,
    payload: arr,
  };
}

export function setBackground(str) {
  return {
    type: Types.SET_BACKGROUND,
    payload: str,
  };
}
