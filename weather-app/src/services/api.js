import axios from "axios";
import getLatituteLongitude from "./getLatLong";

console.log(getLatituteLongitude("Maceio"));

const api = axios.create({
  baseURL: "",
});

export default api;
