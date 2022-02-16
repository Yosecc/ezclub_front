import { ref } from 'vue'
import { Api } from '/@src/services'

export const recurrences = ref([]) 

export const getRecurrences = async ()=>{
	const response = await Api.get('get_recurrences')
    recurrences.value = response.data
  return response
}