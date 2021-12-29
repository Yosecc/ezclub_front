// import { useStorage } from '@vueuse/core'
import router from '/@src/router'

import { ref, computed } from 'vue'
// bind object
export const user = ref(null)

export const remember = ref(false)

export const onLogout = () => { 
	sessionStorage.clear()
	localStorage.clear()
	user.value = null
	router.push({ name: 'auth' })
}

const getUserStorage = () =>{
	if(!JSON.parse(localStorage.getItem('remember'))){
		return JSON.parse(sessionStorage.getItem('user'))
	}else{
		return JSON.parse(localStorage.getItem('user'))
	}
}

user.value = getUserStorage()


export const isAuthenticated = computed(()=>{
	if(user.value != null){
		if (user.value.token != '' || 
			user.value.token != null || 
			user.value.token != undefined || 
			user.value.token != false){
			return true
		}
	}
	return false
})


export const setAuthStorage = (response: any) => {
	
	sessionStorage.clear()
	localStorage.clear()

	if(!remember.value){
		sessionStorage.setItem('remember', remember.value)
		sessionStorage.setItem('user', JSON.stringify(response))
		sessionStorage.setItem('x-api-key',response.token)
	}else{
		localStorage.setItem('remember', remember.value)
		localStorage.setItem('user', JSON.stringify(response))
		localStorage.setItem('x-api-key',response.token)
	}

	user.value = getUserStorage()
} 



