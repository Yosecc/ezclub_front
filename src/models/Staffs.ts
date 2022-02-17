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

export const staff = ref()
export const getStaff = async (id: any) => {
  const response = await Api.get(`staffs/${id}/edit`)
  staff.value = response.data
  return response
}

export const staffRoles = ref()
export const getstaffRoles = async (id: any) => {
  const response = await Api.get(`staffRoles`)
  staff.value = response.data
  return response
}

export const inputsInformation = ref([
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
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
])

export const inputsPermitions = ref([
  {
    typeInput: 'selectData',
    name: 'staff_roles_id',
    placeholder: 'Role',
    values: [],
    model: '',
    required: true,
    class: 'is-6',
    filterOptionText: (option) => {
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
