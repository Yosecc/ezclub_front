import { ref, reactive } from 'vue'
import { Api } from '/@src/services'

export const trainers = ref([])

export const getTrainers = async () => {
  const response = await Api.get('get_trainers')
  trainers.value = response.data
  return response
}

export const staffs = ref([])
export const getStaffs = async () => {
  const response = await Api.get('staffs')
  staffs.value = response.data.staffs
  return response
}

export const staff = ref(null)
export const getStaff = async (id: any) => {
  const response = await Api.get(`staffs/${id}/edit`)
  staff.value = response.data
  return response
}

export const staffRoles = ref()
export const getstaffRoles = async (id: any) => {
  const response = await Api.get(`staffRoles`)
  staffRoles.value = response.data
  return response
}

export const putStaff = async (id: any, obj: any) => {
  const response = await Api.post(`staffs/update/${id}`, obj)
  return response
}

export const storeStaff = async (obj: any) => {
  const response = await Api.post(`staffs`, obj)
  return response
}

export const storeWaiverStaff = async (base64: any, staff_id) => {
  const response = await Api.post(`staff/sign/${staff_id}`, { sign: base64 })
  return response
}

export const inputsInformation = ref([
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Staff Picture',
    model: '',
    required: true,
    camera: true,
    class: 'is-12 d-flex justify-content-end',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'company_name_staff',
    placeholder: 'Company Name',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name: 'ein',
    placeholder: 'Company EIN #',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'date',
    name: 'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'gender',
    placeholder: 'Gender',
    values: ['Male', 'Female', 'Binario'],
    model: '',
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name: 'var_code',
    placeholder: 'Staff ID Card',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID', 'Identification ID', 'Passport'],
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: true,
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name: 'code_postal',
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
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
  },
  // {
  //   typeInput: 'selectData',
  //   name: 'type_trainer',
  //   placeholder: 'Type',
  //   values: [
  //     { description: 'tipo 1', id: 1 },
  //     { description: 'tipo 0', id: 0 },
  //   ],
  //   model: '',
  //   required: true,
  //   class: 'is-4',
  // },
  {
    typeInput: 'select',
    name: 'recurrence',
    placeholder: 'Recurrence',
    values: ['bi-weekly', 'monthly', 'weekly', 'yearly', 'hourly'],
    model: '',
    required: true,
    class: 'is-3',
  },
  // {
  //   typeInput: 'number',
  //   name: 'working_hours',
  //   placeholder: 'Working Hours',
  //   model: '',
  //   required: true,
  //   class: 'is-4',
  // },
  {
    typeInput: 'number',
    name: 'salary',
    placeholder: 'Salary',
    model: '',
    required: false,
    class: 'is-4',
  },
  {
    typeInput: 'switch',
    name: 'rent_space',
    placeholder: 'Rent Space',
    values: ['', 'Rent Space'],
    model: false,
    default: false,
    class: 'is-4',
    required: false,
  },
  {
    typeInput: 'number',
    name: 'price_rent',
    placeholder: 'Price Rent',
    model: '',
    required: false,
    class: 'is-4',
  },
])

export const inputsPermitions = ref([
  {
    typeInput: 'checkboxGroupSimple',
    name: 'locations',
    text: 'Locations',
    values: [],
    model: [],
    disabled: false,
    class: 'is-12',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'staff_roles',
    text: 'Role',
    values: [],
    model: [],
    required: true,
    class: 'is-12',
    filter: (option) => {
      return option.description
    },
  },
  // {
  //   typeInput: 'text',
  //   name:'user',
  //   placeholder: 'User',
  //   model: '',
  //   class: 'is-6',
  // },
  // {
  //   typeInput: 'select',
  //   name: 'work_location',
  //   placeholder: 'Work Location',
  //   values: ['location','location','location'],
  //   model: '',
  //   class: 'is-12',
  // },
  // {
  //   typeInput: 'password',
  //   name:'password',
  //   placeholder: 'Password',
  //   model: '',
  //   class: 'is-6',
  // },
  // {
  //   typeInput: 'password',
  //   name:'confirm_password',
  //   placeholder: 'Confirm Password',
  //   model: '',
  //   class: 'is-6',
  // },
  // {
  //   typeInput: 'checkboxGroupSimple',
  //   name: 'permissions',
  //   model: [1,2],
  //   values:[
  //     {
  //       id:   1 ,
  //       name: 'Members',
  //     },
  //      {
  //       id:   2 ,
  //       name: 'Staff',
  //     },
  //      {
  //       id:   3 ,
  //       name: 'Company',
  //     },
  //   ]
  // }
])

export const inputsSign = ref({
  typeInput: 'hidden',
  name: 'waiver',
  placeholder: 'First Name',
  model: '',
  required: false,
  class: 'is-4',
})
