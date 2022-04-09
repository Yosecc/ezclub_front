import axios from 'axios'
import { ref } from 'vue'
import { user, onLogout } from '/@src/pages/auth/auth.ts'

export const API_URL = ref('')
export const FRONTEND_URL = ref('')
export const API_WEB_URL = ref('')
export const PUBLIC_KEY_STRIPE = ref('')

// const url = 'https://dev-api.ushuaiacreative.com/api/'
// const url = 'https://ezclub.loc/api/'
if (import.meta.env.MODE === 'development') {
  API_URL.value = 'http://ezclub.loc/api/'
  FRONTEND_URL.value = 'http://localhost:3000/'
  API_WEB_URL.value = 'http://ezclub.loc/'
} else {
  API_URL.value = 'https://api.ezclub.app/api/'
  FRONTEND_URL.value = 'https://ezclub.app/'
  API_WEB_URL.value = 'https://api.ezclub.app/'
}
// console.log(VUE_APP_ROUTE_API)
// console.log(env)

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const intance = axios.create({
  baseURL: API_URL.value,
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
