import { ref, computed } from 'vue'

import { Api } from '/@src/services'

import { user } from '/@src/pages/auth/auth.ts'

export const company = ref(null)

export const company_name = computed(() => {
  if (company.value) {
    return company.value.company_name
  }
  return ''
})

export const locationsData = ref(null)

export const location = ref({})

export const locations = computed(() => {
  if (company.value) return company.value.locations
  return []
})

export const getLocation = async (id: any) => {
  const response = await Api.get(`get_location/${id}`)
  location.value = response.data
  return response
}

export const getCompany = async () => {
  const response = await Api.get('company/get')
  company.value = response.data
  return response
}

export const putLocation = async (id: any, data: any) => {
  const response = await Api.put(`companies/updatelocation/${id}`, data)
  company.value = response.data
  return response
}

export const storeLocation = async (data: any) => {
  const response = await Api.put(`companies/storeLocation`, data)
  company.value = response.data
  return response
}

export const companyInputs = ref([
  {
    typeInput: 'file',
    name: 'logo',
    placeholder: 'Company logo',
    model: '',
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name: 'company_name',
    placeholder: 'Company Name',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'email',
    name: 'company_email',
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
    name: 'company_phone',
    placeholder: 'Company Phone',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name: 'company_principal_address',
    placeholder: 'Company Principal Address',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name: 'company_postal_code',
    placeholder: 'Company Postal Code',
    model: '',
    class: 'is-4',
  },

  {
    typeInput: 'selectData',
    values: [''],
    name: 'company_country_id',
    placeholder: 'Company Country Code',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    values: [''],
    name: 'company_city_id',
    placeholder: 'Company City',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    values: [''],
    name: 'company_state_id',
    placeholder: 'Company State',
    model: '',
    class: 'is-4',
  },
])

// PROFILE
export const input_image = ref([
  {
    typeInput: 'file',
    name: 'logo',
    placeholder: 'Company Logo',
    model: '',
  },
])

export const inputsInformation = ref([
  {
    typeInput: 'text',
    name: 'company_name',
    placeholder: 'Club Name',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'number',
    name: 'company_postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'company_country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'company_city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'company_state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'text',
    name: 'company_address',
    placeholder: 'Club Address',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'email',
    name: 'company_email',
    placeholder: 'Club Email',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'company_phone',
    placeholder: 'Club phone',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'textarea',
    name: 'note',
    placeholder: 'Notes',
    model: '',
    required: true,
    class: 'is-12',
  },
])

export const inputsContacto = ref([
  {
    typeInput: 'text',
    name: 'contact_name',
    placeholder: 'Represetative First Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'contact_midle_name',
    placeholder: 'Represetative Middle Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'contact_last_name',
    placeholder: 'Represetative Last Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name: 'contact_email',
    placeholder: 'Club Email',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'EIN',
    placeholder: '# EIN',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'contact_phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'company_postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'contact_country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'contact_city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'contact_state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'text',
    name: 'contact_address',
    placeholder: 'Club Address',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'select',
    name: 'contact_goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID', 'Identification ID', 'Passport'],
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'contact_personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: true,
    class: 'is-8',
  },
  // {
  //   typeInput: 'text',
  //   name:'title',
  //   placeholder: 'Title',
  //   model: '',
  //   required: true,
  //   class: 'is-6',
  // },
  // {
  //   typeInput: 'date',
  //   name:'birth_date',
  //   placeholder: 'Birth Date',
  //   model: '',
  //   required: true,
  //   class: 'is-6',
  // },
  // {
  //   typeInput: 'textarea',
  //   name:'note',
  //   placeholder: 'Notes',
  //   model: '',
  //   required: true,
  //   class: 'is-12',
  // },
])

export const inputsLocation = ref([
  {
    typeInput: 'checkbox',
    name: 'pincipal_address',
    placeholder: 'Principal Address',
    model: [''],
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'status',
    model: [''],
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'file',
    name: 'image',
    placeholder: 'Location image',
    model: '',
    required: true,
    class: 'is-4 d-flex justify-content-end',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Location Name',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
  },

  {
    typeInput: 'text',
    name: 'map',
    placeholder: 'Location map (URL)',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'initations_fee',
    placeholder: 'Initations Fee',
    model: '',
    required: true,
    class: 'is-12',
  },
])
