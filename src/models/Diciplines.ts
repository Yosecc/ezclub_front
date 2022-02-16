import { ref, computed } from 'vue'

import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'
	
export const diciplinesData = ref([])

export const diciplines = computed(()=>{
	return JSON.parse(JSON.stringify(diciplinesData.value))
})

export const getDiciplines = async () => {
	const diciplines = await Api.get('diciplines_get')
	diciplinesData.value = diciplines.data.diciplines
	return diciplines.data.diciplines
}

export const getLocationsDiciplines = async (locationsIds) =>{
	const locationsDiciplines = await Api.get('locations/diciplines/get',{ 
		params: {
			locations:locationsIds
		} 
	})
	return locationsDiciplines
}

export const putStatus = async (dicipline) => {
	dicipline.status = dicipline.status == 1 ? 0:1
	const response = await Api.put(`diciplines/change_status/${dicipline.id}`,{status:dicipline.status})
	if(response.data && response.data.status){
		notyf.success('Record update')
	}else{
		notyf.error('error')
	}
	return response
}

export const saveDicipline = async (dicipline) => {
	const response = await Api.post('diciplines',dicipline)
	if(response.data && response.data.status){
		notyf.success('Record update')
		getDiciplines()
	}else{
		notyf.error('error')
	}
	return response
}

export const inputs = ref([
	{
    typeInput: 'checkbox',
    name:'CombineDiscipline',
    placeholder: 'Combine Discipline',
    model: [],
    required: true,
    class: 'is-2',
  },
  {
    typeInput: 'checkbox',
    name:'status',
    placeholder: 'Cam be add to membership',
    model: [],
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'name',
    placeholder: 'Discipline Name',
    model: '',
    required: true,
    class: 'is-7',
  },
  {
    typeInput: 'checkboxGroupSimple',
    text: 'Locations',
    name:'locations',
    placeholder: 'Locations',
    model: [],
    values:[],
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name:'trainers',
    text: 'Trainers',
    model: [],
    values:[],
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'textarea',
    name:'descrptions',
    placeholder: 'Discipline Description',
    model: '',
    required: true,
    class: 'is-12',
  },
  
   {
    typeInput: 'textarea',
    name:'notes',
    placeholder: 'Internal Notes',
    model: '',
    required: false,
    class: 'is-12',
  },
])

// export const companyInputs = ref([{
// 	  typeInput: 'file',
// 	  name:'logo',
// 	  placeholder: 'Company logo',
// 	  model: '',
// 	  class: 'is-12',
// 	},{
// 	  typeInput: 'text',
// 	  name:'company_name',
// 	  placeholder: 'Company Name',
// 	  model: '',
// 	  class: 'is-6',
// 	},
// 	{
// 	  typeInput: 'email',
// 	  name:'company_email',
// 	  placeholder: 'Company email',
// 	  model: '',
// 	  class: 'is-6',
// 	},
// 	{
// 	  typeInput: 'text',
// 	  name: 'EIN',
// 	  placeholder: 'EIN',
// 	  model: '',
// 	  class: 'is-6',
// 	},
// 	{
// 	  typeInput: 'number',
// 	  name:'company_phone',
// 	  placeholder: 'Company Phone',
// 	  model: '',
// 	  class: 'is-6',
// 	},
// 	{
// 	  typeInput: 'text',
// 	  name:'company_principal_address',
// 	  placeholder: 'Company Principal Address',
// 	  model: '',
// 	  class: 'is-8',
// 	},
// 	{
// 	  typeInput: 'number',
// 	  name:'company_postal_code',
// 	  placeholder: 'Company Postal Code',
// 	  model: '',
// 	  class: 'is-4',
// 	},
	
// 	{
// 	  typeInput: 'selectData',
// 	  values: [''],
// 	  name:'company_country_id',
// 	  placeholder: 'Company Country Code',
// 	  model: '',
// 	  class: 'is-4',
// 	},
// 	{
// 	  typeInput: 'selectData',
// 	  values: [''],
// 	  name:'company_city_id',
// 	  placeholder: 'Company City',
// 	  model: '',
// 	  class: 'is-4',
// 	},
// 	{
// 	  typeInput: 'selectData',
// 	  values: [''],
// 	  name:'company_state_id',
// 	  placeholder: 'Company State',
// 	  model: '',
// 	  class: 'is-4',
// 	},
// ])