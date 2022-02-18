import axios from 'axios'

import { user, onLogout } from '/@src/pages/auth/auth.ts'

// const url = 'https://dev-api.ushuaiacreative.com/api/'
const url = 'http://127.0.0.1:8000/api/'

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const intance = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    // "Authorization": "Bearer "+localStorage.getItem("x-api-key"),
    // "x-api-key": user.value != null ? user.value.token : '',
  },
})

// intance.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   if(error.response.status == 401){
//     // onLogout()
//   }else{
//     return Promise.reject(error);
//   }

// });

export const Api = intance
