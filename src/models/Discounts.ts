import { ref, computed } from 'vue'

import { Api } from '/@src/services'

export const discounts = ref([])
export const discount = ref({})

export const getDiscounts = async (status: any = false) => {
  const response = await Api.get(`discounts?status=${status}`)
  discounts.value = response.data.discounts
  return response
}

export const storeDiscount = async (data: any) => {
  const response = await Api.post('discounts', data)
  return response
}

export const putDiscount = async (id: any, data: any) => {
  const response = await Api.put(`discounts/${id}`, data)
  return response
}

export const getDiscount = async (id: any) => {
  const response = await Api.get(`discounts/${id}/edit`)
  discount.value = response.data
  return response
}

export const validateCupon = async (code: any, applies: any) => {
  const response = await Api.get(
    `discounts/validateCupon/${code}?applies=${applies}`
  )
  return response
}

export const inputs = ref([
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'Status',
    model: [],
    required: false,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'code',
    placeholder: 'Discount Code',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'description',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'select',
    name: 'type',
    placeholder: 'Discount Type',
    values: ['dolar', 'percentaje'],
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'value',
    placeholder: 'Discount Value',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'select',
    name: 'applies',
    placeholder: 'Applies to',
    values: ['membership', 'product'],
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'checkbox',
    name: 'is_recurrence',
    placeholder: 'Is Recurrence',
    model: [],
    required: false,
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'recurrence',
    placeholder: 'Recurrence',
    values: ['month', 'year'],
    model: '',
    required: false,
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'usage',
    placeholder: 'Usage Limits',
    values: ['limit_num', 'unlimit', 'one'],
    model: '',
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'number',
    name: 'usage_limit_num',
    placeholder: 'Usage limit num',
    model: '',
    required: false,
    class: 'is-3',
  },
  {
    typeInput: 'date',
    name: 'date_start',
    placeholder: 'Start Date',
    model: '',
    required: false,
    class: 'is-6',
  },
  {
    typeInput: 'date',
    name: 'date_expired',
    placeholder: 'End Date',
    model: '',
    required: false,
    class: 'is-6',
  },
])
