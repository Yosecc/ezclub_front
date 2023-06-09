import { ref, computed } from 'vue'
import { Api } from '/@src/services'
import { user } from '/@src/pages/auth/auth'
import { getInput } from '/@src/models/Mixin'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()

export const company = ref(null)

export const company_name = computed(() => {
  if (company.value) {
    return company.value.company_name
  }
  return ''
})

export const locationsData = ref(null)

export const location = ref({})
const locationCookie = ref(cookies.get('locations_id'))

export const locations = computed(() => {
  if (company.value) return company.value.locations
  return []
})
export const locationsActives = computed(() => {
  if (company.value) return company.value.locations.filter((e) => e.status == 1)
  return []
})

export const terminales = computed(() => {
  if (company.value) {
    const arr = []
    company.value.locations.forEach((i) => {
      i.terminales.forEach((e) => {
        arr.push({
          locations_id: i.id,
          id: e.id,
          label: e.label,
          serial_number: e.serial_number,
          status: e.status,
        })
      })
    })
    return arr.filter(
      (e) =>
        e.locations_id == getInput(locationsSelect.value, 'locations_id').model
    )
  }
  return []
})

export const getLocation = async (id: any) => {
  const response = await Api.get(`get_location/${id}`)
  location.value = response.data
  return response
}
import { Api, PUBLIC_KEY_STRIPE } from '/@src/services'

export const getCompany = async () => {
  const response = await Api.get('company/get')
  company.value = response.data
  locationSistem()
  return response
}

export const setLocationSistem = (id: number) => {
  cookies.set('locations_id', id)
  const locacion = locationSistem()
  // Api.defaults.headers.common['x-location'] = cookies.get('locations_id')
}

export const locationSistemID = computed(() => {
  if (cookies.get('locations_id')) {
    return cookies.get('locations_id')
  }
  return null
})

export const locationSistem = () => {
  const id = cookies.get('locations_id')
  if (id) {
    const location = locations.value.find((e) => e.id == id)

    if (location) {
      cookies.set('location_name', location.name)

      const mode = import.meta.env.VITE_MODE
      if (mode == 'development' || mode == 'staging') {
        PUBLIC_KEY_STRIPE.value = location.dev_key_stripe_public
      } else {
        PUBLIC_KEY_STRIPE.value = location.key_stripe_public
      }
      Api.defaults.headers.common['x-location'] = cookies.get('locations_id')
    }

    return location
  }
  return null
}

export const getCompanySlug = async (slug: string) => {
  const response = await Api.get(`company/${slug}`)
  company.value = response.data
  return response
}

export const putCompanyInformation = async (data: any) => {
  const response = await Api.post(
    `companies/updatecompany/${company.value.id}`,
    data
  )
  return response
}
export const putCompanyContact = async (data: any) => {
  const response = await Api.post(
    `companies/updateCompanyContact/${company.value.id}`,
    data
  )
  return response
}

export const putLocation = async (id: any, data: any) => {
  const response = await Api.post(`companies/updatelocation/${id}`, data)

  return response
}

export const storeLocation = async (data: any) => {
  const response = await Api.post(`companies/storeLocation`, data)
  return response
}

export const locationsSelect = ref([
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'locations_id',
    placeholder: 'Location',
    model: '',
    values: [],
    class: 'is-4',
    change: null,
  },
])

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
    isLabel: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'EIN',
    placeholder: 'EIN',
    model: '',
    required: true,
    isLabel: true,
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name: 'company_principal_address',
    placeholder: 'Club Address',
    model: '',
    required: true,
    isLabel: true,
    class: 'is-12',
  },
  {
    typeInput: 'selectData',
    name: 'company_city_id',
    placeholder: 'City',
    isLabel: true,
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
    isLabel: true,
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'company_postal_code',
    placeholder: 'Postal Code',
    isLabel: true,
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'company_country_id',
    placeholder: 'Country',
    isLabel: true,
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },

  {
    typeInput: 'email',
    name: 'company_email',
    placeholder: 'Club Email',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'company_phone',
    placeholder: 'Club phone',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'textarea',
    name: 'note',
    placeholder: 'Notes',
    isLabel: true,
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
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'contact_middle_name',
    placeholder: 'Represetative Middle Name',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'contact_last_name',
    placeholder: 'Represetative Last Name',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name: 'contact_email',
    placeholder: 'Club Email',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4',
  },

  {
    typeInput: 'number',
    name: 'contact_phone',
    placeholder: 'Phone Number',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'contact_postal_code',
    placeholder: 'Postal Code',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'contact_country_id',
    placeholder: 'Country',
    isLabel: true,
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
    isLabel: true,
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
    isLabel: true,
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
    isLabel: true,
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'select',
    name: 'contact_goverment_id',
    placeholder: 'Goverment ID Type',
    isLabel: true,
    values: [
      'Florida Driver License',
      'Other State ID',
      'Florida ID Card',
      'Passport',
      'Foreing Country ID',
      'Florida Personal Identification Card',
      'Florida Learner License',
    ],
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'contact_personal_identifications',
    placeholder: 'ID #',
    isLabel: true,
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
    isLabel: true,
    model: [''],
    required: false,
    class: 'is-4',
  },
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'status',
    isLabel: true,
    model: [],
    required: false,
    class: 'is-4',
  },
  {
    typeInput: 'file',
    name: 'image',
    placeholder: 'Location image',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-4 d-flex justify-content-end',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Location Name',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    isLabel: true,
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
    isLabel: true,
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    isLabel: true,
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    isLabel: true,
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option) => {
      return option.name
    },
  },

  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    isLabel: true,
    model: '',
    required: true,
    class: 'is-6',
  },

  {
    typeInput: 'text',
    name: 'map',
    placeholder: 'Location map (URL)',
    isLabel: true,
    model: '',
    required: false,
    class: 'is-6',
  },
  // {
  //   typeInput: 'number',
  //   name: 'initations_fee',
  //   placeholder: 'Initations Fee',
  //   model: '',
  //   required: true,
  //   class: 'is-12',
  // },
])
