import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5028",
});

export default instance;
