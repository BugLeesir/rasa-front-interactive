import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:5005/", // url = base url + request url
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.head && res.head.code !== "0") {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
