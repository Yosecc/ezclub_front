import axios from 'axios'
import { ref } from 'vue'
import { user, onLogout } from '/@src/pages/auth/auth'
import { notyf } from '/@src/models/Mixin'

export const API_URL = ref(import.meta.env.VITE_ROUTE_API)
export const FRONTEND_URL = ref(import.meta.env.VITE_FRONTEND_URL)
export const API_WEB_URL = ref(import.meta.env.VITE_API_WEB_URL)
export const PUBLIC_KEY_STRIPE = ref('')

API_URL.value = import.meta.env.VITE_ROUTE_API
FRONTEND_URL.value = import.meta.env.VITE_FRONTEND_URL
API_WEB_URL.value = import.meta.env.VITE_API_WEB_URL

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const intance = axios.create({
  baseURL: API_URL.value,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    // "Authorization": "Bearer "+localStorage.getItem("x-api-key"),
    // 'x-api-key': user?.value != null ? user?.value.token : '',
  },
})

intance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    error = error.response.data
    if (typeof error == 'object') {
      for (const i in error) {
        if (typeof error[i] == 'object') {
          for (const e in error[i]) {
            if (typeof error[i][e] == 'object') {
              for (const x in error[i][e]) {
                if (typeof error[i][e][x] == 'string') {
                  notyf.error(error[i][e][x])
                }
              }
            } else if (typeof error[i][e] == 'string') {
              notyf.error(error[i][e])
            }
          }
        } else if (typeof error[i] == 'string') {
          notyf.error(error[i])
        }
      }
    } else {
      if (typeof error == 'string') {
        notyf.error(error)
      }
    }

    if (error.response.status == 401) {
      // onLogout()
    } else {
      return Promise.reject(error)
    }
  }
)

export const Api = intance
