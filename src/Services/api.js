import axios from "axios";

const api = axios.create({
  baseURL: "http://67.205.141.195:3001"
});

export default api;
