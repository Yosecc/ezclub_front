import { ref, computed } from 'vue'

export const servicesPacks = ref([])

import { Api } from '/@src/services'

export const getServicesPacks = async ()=>{
	await Api.get('services_packs/get').then((response)=>{
		servicesPacks.value = response.data
	})
	return servicesPacks
}