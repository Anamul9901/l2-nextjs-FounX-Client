"use server"
import envConfig from "@/src/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});



//! auto accessToken server e pass korar jonno necergulu. 
//! aita use korle jekhane jekhane axiosInstance use korse oi file e "use server" use must korte hobe
axiosInstance.interceptors.request.use(
  function (config) {
    const cooiesStore = cookies();

    const accessToken = cooiesStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
