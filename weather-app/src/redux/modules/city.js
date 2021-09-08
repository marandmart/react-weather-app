export const Types = {
  SET_CITY: "city/SET_CITY",
};

const initialState = {
  city: "Maceio",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CITY:
      return { ...state, city: action.payload };
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
