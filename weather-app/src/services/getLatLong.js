import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY);

Geocode.setLanguage("pt-BR");

Geocode.setRegion("br");

Geocode.enableDebug();

const getLatituteLongitude = (cityname) => {
  Geocode.fromAddress(cityname).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default getLatituteLongitude;
