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

export const locationsData = ref(null)

export const locations = computed(()=>{
	if(company.value)
		return company.value.locations
	return []
})	

export const getCompany = async () => {
	const companyData = await Api.get('company/get')
	company.value = companyData.data
	return companyData
}

export const companyInputs = ref([{
	  typeInput: 'file',
	  name:'logo',
	  placeholder: 'Company logo',
	  model: '',
	  class: 'is-12',
	},{
	  typeInput: 'text',
	  name:'company_name',
	  placeholder: 'Company Name',
	  model: '',
	  class: 'is-6',
	},
	{
	  typeInput: 'email',
	  name:'company_email',
	  placeholder: 'Company email',
	  model: '',
	  class: 'is-6',
	},
	{
	  typeInput: 'text',
	  name: 'EIN',
	  placeholder: 'EIN',
	  model: '',
	  class: 'is-6',
	},
	{
	  typeInput: 'number',
	  name:'company_phone',
	  placeholder: 'Company Phone',
	  model: '',
	  class: 'is-6',
	},
	{
	  typeInput: 'text',
	  name:'company_principal_address',
	  placeholder: 'Company Principal Address',
	  model: '',
	  class: 'is-8',
	},
	{
	  typeInput: 'number',
	  name:'company_postal_code',
	  placeholder: 'Company Postal Code',
	  model: '',
	  class: 'is-4',
	},
	
	{
	  typeInput: 'selectData',
	  values: [''],
	  name:'company_country_id',
	  placeholder: 'Company Country Code',
	  model: '',
	  class: 'is-4',
	},
	{
	  typeInput: 'selectData',
	  values: [''],
	  name:'company_city_id',
	  placeholder: 'Company City',
	  model: '',
	  class: 'is-4',
	},
	{
	  typeInput: 'selectData',
	  values: [''],
	  name:'company_state_id',
	  placeholder: 'Company State',
	  model: '',
	  class: 'is-4',
	},
])