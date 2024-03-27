import axios from "axios";
import store from "@/store/index";
const $axios = axios.create({
  baseURL: "http://127.0.0.1:8001/api",
});

$axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    store.dispatch("showLoading");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
$axios.interceptors.response.use(
  (response) => {
    store.dispatch("stopLoading");
    return response;
  },
  (error) => {
    store.dispatch("stopLoading");
    return Promise.reject(error);
  }
);
export default $axios;
