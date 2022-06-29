import { ref } from 'vue'
import { Api } from '/@src/services'

export const getReports = async (data: object = {}) => {
  const response = await Api.get(`reports`, {
    params: data,
  })
  return response
}

export const getStripeReports = async (data: object = {}) => {
  const response = await Api.get(`reports/stripe/transactions`, {
    params: data,
  })
  return response
}

export const downloadReports = async (data: object = {}) => {
  const response = await Api.get(`reports/download`, {
    params: data,
    responseType: 'arraybuffer',
  })
  return response
}

export const getMemberShipsCancelled = async (data: object = {}) => {
  const response = await Api.get(`reports/memberships-cancelled`, {
    params: {
      ...data,
      status: true,
    },
  })
  return response
}

export const getMemberWithoutPaymentMethod = async (data: object = {}) => {
  const response = await Api.get(`reports/members-with-out-payment-method`, {
    params: {
      ...data,
      no_payment_method: true,
    },
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
    values: ['Memberships', 'Products'],
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'payment_type',
    label: 'Payment Type',
    placeholder: 'All',
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

export const filterStripeInsputs = ref([
  {
    typeInput: 'text',
    name: 'payment_id',
    placeholder: 'Payment Id',
    model: '',
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'type',
    label: 'Transaction Type',
    placeholder: 'All',
    values: [
      'adjustment',
      'advance',
      'advance_funding',
      'anticipation_repayment',
      'application_fee',
      'application_fee_refund',
      'charge',
      'connect_collection_transfer',
      'contribution',
      'issuing_authorization_hold',
      'issuing_authorization_release',
      'issuing_dispute',
      'issuing_transaction',
      'payment',
      'payment_failure_refund',
      'payment_refund',
      'payout',
      'payout_cancel',
      'payout_failure',
      'refund',
      'refund_failure',
      'reserve_transaction',
      'reserved_funds',
      'stripe_fee',
      'stripe_fx_fee',
      'tax_fee',
      'topup',
      'topup_reversal',
      'transfer',
      'transfer_cancel',
      'transfer_failure',
      'transfer_refund',
    ],
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

export const filterInsputsMembershipsCancelledReport = ref([
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
