import axios from "axios";

const url = 'https://dev-api.ushuaiacreative.com/api/'
// let url = 'https://ezclub.loc/api/'

export const Api = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    // "Authorization": "Bearer "+localStorage.getItem("x-api-key"),
    "x-api-key": localStorage.getItem("x-api-key"),
    
  },

});

