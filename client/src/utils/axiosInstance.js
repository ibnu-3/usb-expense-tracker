import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://zany-couscous-g4wp4wq6ww94cwp4v-8080.app.github.dev/",
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
