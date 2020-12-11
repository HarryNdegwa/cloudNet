import axios from "axios";

// import { store } from "./redux/store";

// const token = store.getState().persist.identity;

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
});

export default axiosInstance;
