import axios from "axios";
import axiosRetry from "axios-retry";
import type { App } from "vue";

const http = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : '',
  timeout: 3000,
  headers: {}
})

http.interceptors.request.use(function (config) {

  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  return Promise.reject(error);
});

axiosRetry(http, {
  retries: 3
})

export default {
  install: (app: App, ...options: any[]) => {
    app.config.globalProperties.$http = http
  }
}