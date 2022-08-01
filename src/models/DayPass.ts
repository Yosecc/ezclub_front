import { ref, computed, onBeforeMount, reactive } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'
import {
  getInput,
  notyf,
  perpareDataInputs,
  hasErrors,
} from '/@src/models/Mixin.ts'

export const loading = ref(false)

export const user = ref({ id: null })

export const membersDayPass = ref([])

export const filter = ref('today') //All|today|yesterday|last_7_day

export const inputsMember = ref([
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'tel',
    name: 'phone',
    placeholder: 'Phone Numbers',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    mask: '(###) ###-####',
  },
])

export const inputsForm = ref([
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'name',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
  },
  {
    typeInput: 'number',
    name: 'amount',
    placeholder: 'Price',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
  },
])

export const dayPass = computed(() => {
  return {
    amount: getInput(inputsForm.value, 'amount').model,
    name: getInput(inputsForm.value, 'name').model,
  }
})

export const storeProductAndPrice = async (data: any) => {
  const response = await Api.post(`pass_day/create_product`, {
    amount: getInput(inputsForm.value, 'amount').model,
    name: getInput(inputsForm.value, 'name').model,
  })
  notyf.success('Record Save')
  return response
}

export const getDayPass = async () => {
  loading.value = true
  const response = await Api.get(`pass_day/get_day_pass`)
  getInput(inputsForm.value, 'amount').model = response.data.amount / 100
  getInput(inputsForm.value, 'name').model = response.data.name

  loading.value = false

  return response
}

export const getMembersDayPass = async () => {
  const response = await Api.get(
    `pass_day/get_members_day_pass?filter=${filter.value}`
  )
  membersDayPass.value = response.data

  return response
}

export const onProcess = async () => {
  const data = perpareDataInputs(inputsMember.value)
  if (!hasErrors.value) {
    const response = await Api.post(`pass_day/process`, data)
    return response
  }
}

export const onPaymentDayPass = async (object: any) => {
  const data = perpareDataInputs(inputsMember.value)
  data.payment_type_id = object.payment_type_id
  data.user_id = user.value.id
  data.amount = object.amount

  const response = await Api.post(`pass_day/payment_day_pass`, data)
  return response
}
