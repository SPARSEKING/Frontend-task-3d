import axios from "axios";

export default function setIterceptors() {
  axios.defaults.baseURL = "http://localhost:3000/";
}
