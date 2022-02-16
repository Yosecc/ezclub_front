import { ref } from 'vue'
import { Api } from '/@src/services'

export const trainers = ref([]) 

export const getTrainers = async ()=>{
	const response = await Api.get('get_trainers')
    trainers.value = response.data
  return response
}