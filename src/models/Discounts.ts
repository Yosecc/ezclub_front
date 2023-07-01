import { ref, computed } from 'vue'

import { Api } from '/@src/services'
import { getInput } from '/@src/models/Mixin.ts'

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

export const deleteDiscount = async (id: any) => {
  const response = await Api.delete(`/discounts/destroy/${id}`)
  return response
}

export const validateCupon = async (code: any, applies: any) => {
  const response = await Api.get(
    `discounts/validateCupon/${code}?applies=${applies}`
  )
  return response
}

export const validateCuponV2 = async (code: any, applies: any) => {
  const response = await Api.get(
    `v2/discounts/validateCupon/${code}?applies=${applies}`
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
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'code',
    placeholder: 'Discount Code',
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Name',
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
    maxLength: 40,
  },
  {
    typeInput: 'select',
    name: 'type',
    placeholder: 'Discount Type',
    values: ['dolar', 'percentaje'],
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'value',
    placeholder: 'Discount Value',
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'applies',
    placeholder: 'Applies to',
    values: ['All', 'membership', 'product'],
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'duration',
    placeholder: 'Duration',
    values: ['once', 'repeating', 'forever'],
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
    change: function (event: any, inputs: any) {
      if (this.model == 'repeating') {
        getInput(inputs, 'duration_in_months').typeInput = 'number'
        getInput(inputs, 'duration_in_months').required = true
      } else {
        getInput(inputs, 'duration_in_months').typeInput = 'hidden'
        getInput(inputs, 'duration_in_months').required = false
      }
    },
  },
  {
    typeInput: 'number',
    name: 'max_redemptions',
    placeholder: 'Usage limit num',
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
  {
    typeInput: 'hidden',
    name: 'duration_in_months',
    placeholder: 'Duration in months',
    model: '',
    required: false,
    class: 'is-3',
    isLabel: true,
  },
])
