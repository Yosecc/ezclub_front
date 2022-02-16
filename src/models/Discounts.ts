import { ref, computed } from 'vue'

import { Api } from '/@src/services'

export const discountsData = ref([])

export const discounts = computed(()=>{
	return JSON.parse(JSON.stringify(discountsData.value))
})

export const getDiscounts = async () => {
	const discounts = await Api.get('discounts')
	discountsData.value = discounts.data.discounts
	return discounts
}