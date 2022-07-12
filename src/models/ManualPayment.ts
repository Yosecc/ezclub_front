import { ref } from 'vue'
import { Api } from '/@src/services'

export const makeAPaymentInputs = ref([
  {
    typeInput: 'text',
    name: 'description',
    placeholder: 'Description',
    model: '',
    class: 'is-12',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'text',
    name: 'amount',
    placeholder: 'Amount',
    model: '',
    class: 'is-12',
    isLabel: true,
    required: true,
  },
])

export const makeManualPayment = async (data: object = {}) => {
  const response = await Api.post(`make-manual-payment`, data)
  return response
}
