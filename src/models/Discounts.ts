import { ref, computed } from 'vue'

import { Api } from '/@src/services'

export const discounts = ref([])
export const discount = ref({})

export const getDiscounts = async (
  status: any = null,
  applies: string = null
) => {
  const response = await Api.get(
    `discounts?status=${status}&applies=${applies}`
  )
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
    typeInput: 'switch',
    name: 'status',
    placeholder: 'Status',
    values: ['', 'Active'],
    model: true,
    default: true,
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
    values: ['All', 'membership', 'product'],
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'switch',
    name: 'is_recurrence',
    values: ['', 'Is Recurrence'],
    placeholder: 'Is Recurrence',
    model: false,
    default: false,
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
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'time',
    name: 'time_start',
    placeholder: 'Start Time',
    model: '',
    required: false,
    class: 'is-3',
    isLabel: true,
  },

  {
    typeInput: 'date',
    name: 'date_expired',
    placeholder: 'End Date',
    model: '',
    required: false,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'time',
    name: 'time_expired',
    placeholder: 'End Time',
    model: '',
    required: false,
    class: 'is-3',
    isLabel: true,
  },
])
