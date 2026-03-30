import axios from "axios";

const API = axios.create({
  baseURL: "https://edumerge-assignemnet.onrender.com/api",
});

export default API;