import { ref, computed } from 'vue'

import { Api } from '/@src/services'

import { user } from '/@src/pages/auth/auth.ts'

export const company = ref(null)

export const company_name = computed(()=>{
	if(company.value){
		return company.value.company_name
	}
	return ''
})

export const getCompany = async () => {
	const companyData = await Api.get('company/get')
	company.value = companyData.data
	return companyData
}