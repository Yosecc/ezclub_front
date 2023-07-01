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
export const stateTerminalData = {
  failure_code: null,
  failure_message: null,
  process_payment_intent: {
    payment_intent: '',
  },
  status: '',
  type: '',
}

export const paymentIntentTerminalData = {
  amount: 0,
  id: '',
  created: '',
  status: '',
}

export const stateTerminal = ref(JSON.parse(JSON.stringify(stateTerminalData)))
export const paymentIntentTerminal = ref(
  JSON.parse(JSON.stringify(paymentIntentTerminalData))
)

export const makeManualPayment = async (data: object = {}) => {
  const response = await Api.post(`make-manual-payment`, data)
  return response
}

export const solicitudIntentoPago = async (data: object) => {
  const response = await Api.post(`v2/stripe/paymentIntentTerminal`, data)
  if (response.data.terminal == null) {
    stateTerminal.value = JSON.parse(JSON.stringify(stateTerminalData))
  } else {
    stateTerminal.value = response.data.terminal
  }

  if (response.data.payment_intent == null) {
    paymentIntentTerminal.value = JSON.parse(
      JSON.stringify(paymentIntentTerminalData)
    )
  } else {
    paymentIntentTerminal.value = response.data.payment_intent
  }
  return response
}

export const consultaTerminal = async (data: object) => {
  const response = await Api.post(`v2/stripe/consultaTerminal`, data)

  if (response.data.terminal == null) {
    stateTerminal.value = JSON.parse(JSON.stringify(stateTerminalData))
  } else {
    stateTerminal.value = response.data.terminal
  }

  if (response.data.payment_intent == null) {
    paymentIntentTerminal.value = JSON.parse(
      JSON.stringify(paymentIntentTerminalData)
    )
  } else {
    paymentIntentTerminal.value = response.data.payment_intent
  }
  return response
}

export const stopTerminal = async (data: object) => {
  const response = await Api.post(`v2/stripe/stopTerminal`, data)

  stateTerminal.value = JSON.parse(JSON.stringify(stateTerminalData))
  paymentIntentTerminal.value = JSON.parse(
    JSON.stringify(paymentIntentTerminalData)
  )

  return response
}
