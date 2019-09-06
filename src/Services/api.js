import axios from "axios";

const api = axios.create({
  baseURL: "https://pin.exemplos-ww.xyz"
});

export default api;
