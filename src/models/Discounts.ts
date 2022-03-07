import { ref, computed } from 'vue'

import { Api } from '/@src/services'

export const discountsData = ref([])

export const discounts = computed(() => {
  return JSON.parse(JSON.stringify(discountsData.value))
})

export const getDiscounts = async () => {
  const discounts = await Api.get('discounts')
  discountsData.value = discounts.data.discounts
  return discounts
}

export const storeDiscount = async (data: any) => {
  const discounts = await Api.post('discounts', data)
  return discounts
}

export const inputs = ref([
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'Status',
    model: [],
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Discount Code / Name',
    model: '',
    required: true,
    class: 'is-9',
  },
  {
    typeInput: 'select',
    name: 'discount_type',
    placeholder: 'Discount Type',
    values: ['Dollar Amount', 'Percentage Amount'],
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
    name: 'applies_to',
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
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'recurrence',
    placeholder: 'Recurrence',
    values: ['month', 'year', 'time'],
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
