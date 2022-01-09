import { ref, computed, onMounted} from 'vue'

const citiesData = ref([])
const statesData = ref([])
const contriesData = ref([])

export const cities = computed(()=>{
	return JSON.parse(JSON.stringify(citiesData.value))
})
export const states = computed(()=>{
	return JSON.parse(JSON.stringify(statesData.value))
})
export const contries = computed(()=>{
	return JSON.parse(JSON.stringify(contriesData.value))
})


/*
 *  GET API
 */

import { Api } from '/@src/services'

export const getcities = async ()=>{
	await Api.get('cities').then((response)=>{
		citiesData.value = response.data
	})
	 return cities
}
export const getstates = async ()=>{
	await Api.get('states').then((response)=>{
		statesData.value = response.data
	})
	 return states
}
export const getcontries = async ()=>{
	await Api.get('countries').then((response)=>{
		contriesData.value = response.data
	})
	return contries
}

