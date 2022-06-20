import { ref } from 'vue'
import { Api } from '/@src/services'

export const getReports = async (data: object = {}) => {
  const response = await Api.get(`reports/memberships`, {
    params: data,
  })
  return response
}

export const filterInsputs = ref([
  {
    typeInput: 'select',
    name: 'report_type',
    placeholder: 'Report Type',
    values: ['memberships', 'Orders'],
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
