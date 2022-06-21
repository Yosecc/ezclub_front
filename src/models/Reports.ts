import { ref } from 'vue'
import { Api } from '/@src/services'

export const getReports = async (data: object = {}) => {
  const response = await Api.get(`reports`, {
    params: data,
  })
  return response
}

export const getMemberReports = async (data: object = {}) => {
  const response = await Api.get(`reports/members`, {
    params: data,
  })
  return response
}

export const filterInsputs = ref([
  {
    typeInput: 'select',
    name: 'report_type',
    placeholder: 'Report Type',
    values: ['Memberships', 'Orders'],
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'payment_type',
    placeholder: 'Payment Type',
    values: ['Credit Card', 'Cash'],
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'start_date',
    placeholder: 'Start Date',
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'end_date',
    placeholder: 'End Date',
    model: '',
    class: 'is-3',
    isLabel: true,
  },
])

export const filterInsputsMemberReport = ref([
  {
    typeInput: 'text',
    name: 'search',
    placeholder: 'search',
    model: '',
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'start_date',
    placeholder: 'Start Date',
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'end_date',
    placeholder: 'End Date',
    model: '',
    class: 'is-3',
    isLabel: true,
  },
])
