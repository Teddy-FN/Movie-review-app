import axios from "axios";

const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=1";
const options = {
  headers: {
    "X-RapidAPI-Key": "d576ea0a05msha2c709ebd83281cp187d1cjsna7a85b900e39",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const URL_API = (method, url, body = {}) => {};
