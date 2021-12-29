import axios from "axios";

import { user, onLogout } from '/@src/state/auth.ts'

const url = 'https://dev-api.ushuaiacreative.com/api/'

let intance = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    // "Authorization": "Bearer "+localStorage.getItem("x-api-key"),
    "x-api-key": user.value != null ? user.value.token : '',
  },

});

intance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if(error.response.status == 401){
    onLogout()
  }else{
    return Promise.reject(error);
  }
  
});

export const Api = intance