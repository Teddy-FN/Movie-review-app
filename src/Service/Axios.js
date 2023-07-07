import axios from "axios";

export const URL_API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}`,
  },
  timeout: 5000,
});
