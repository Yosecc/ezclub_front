import { Api } from '/@src/services'
import { ref, computed, reactive } from 'vue'
import { validateCuponV2 } from '/@src/models/Discounts'
import {
  // setInputValuesData,
  // setInputModelData,
  // getValueInput,
  // getInput,
  notyf,
  // perpareDataInputs,
  // convertFormData,
} from '/@src/models/Mixin'

export const estados = ref([
  {
    value: 'All',
    name: 'All',
  },
  {
    value: 'COBRAR HOY',
    name: 'Payday',
  },
  {
    value: 'PENDIENTE',
    name: 'Pending',
  },
  {
    value: 'VENCIDO',
    name: 'Due',
  },
  {
    value: 'PAGADO',
    name: 'Paid',
  },
  {
    value: 'CANCELADO',
    name: 'Canceled',
  },
  {
    value: 'EXPIRADO',
    name: 'Expired',
  },
  {
    value: 'PROX. CANCELADO',
    name: 'Prox. Expired',
  },
  {
    value: 'HOLD',
    name: 'Hold',
  },
  {
    value: 'CANCEL DUE TO DEBT',
    name: 'Cancel due to debit',
  },
])

export const estadosIntentos = ref([
  {
    value: 'fallido',
    name: 'Failed',
  },
  {
    value: 'pagado',
    name: 'Paid',
  },
])

//DATA
export const presupuesto = ref(null)

export const suscripciones = ref([])

export const solicitudDataInicial = {
  memberships_id: null,
  recurrences_id: null,
  is_initiation_fee: true,
  is_card_price: false,
  discount: null,
  is_last_month: false,
  multigym: false,
  prorrateo: true,
  schedules: '',
  leo_vet_fr: false,
  payment_type_id: 3,
}

export const solicitud = reactive(
  JSON.parse(JSON.stringify(solicitudDataInicial))
)

export const restartSolicitud = () => {
  Object.assign(solicitud, JSON.parse(JSON.stringify(solicitudDataInicial)))
}

export const inputsMembership = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'is_initiation_fee',
    values: ['NO', 'YES'],
    placeholder: 'Initiation fee',
    default: true,
    model: solicitud.is_initiation_fee,
    disabled: false,
    class: 'is-3 switch-button',
    isLabel: true,
  },
  {
    typeInput: 'switchEventChangeInput',
    default: false,
    name: 'is_card_price',
    placeholder: 'Card',
    values: ['NO', 'YES'],
    model: false,
    disabled: false,
    class: 'is-3 switch-button',
    isLabel: true,
  },
  {
    typeInput: 'switchEventChangeInput',
    default: false,
    name: 'is_last_month',
    placeholder: 'Last Month',
    values: ['NO', 'YES'],
    model: false,
    disabled: false,
    class: 'is-3 switch-button',
    isLabel: true,
  },
  {
    typeInput: 'switchEventChangeInput',
    default: false,
    name: 'multigym',
    placeholder: 'MultiGym',
    values: ['NO', 'YES'],
    model: false,
    disabled: false,
    class: 'is-3 switch-button',
    isLabel: true,
  },

  {
    typeInput: 'switchEventChangeInput',
    name: 'prorrateo',
    values: ['NO', 'YES'],
    placeholder: 'Prorated Payment',
    model: true,
    default: true,
    required: false,
    class: 'is-3 switch-button',
    isLabel: true,
  },
  {
    typeInput: 'switch',
    name: 'leo_vet_fr',
    values: ['NO', 'YES'],
    placeholder:
      'Member is: Law Enforcement Officer, Veteran o First Responder.',
    // html: '<div class="ml-4"><p><small>VETERAN</small></p><p><small>FIRTS RESPONDER</small></p></div>',
    model: false,
    default: false,
    required: false,
    class: 'is-9 switch-button',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'hidden',
    name: 'schedules',
    placeholder: 'Subscription Schedules',
    model: '',
    required: false,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    data: null,
    model: '',
    disabled: false,
    class: 'is-4',
    isLabel: true,
    change: function (inputsStep: any) {
      if (this.model != '') {
        validateCuponV2(
          this.values.find((e: any) => e.id == this.model).code,
          'membership'
        )
          .then((response: any) => {
            this.data = response.data
            notyf.success('Discuount valid')
          })
          .catch((error: any) => {
            notyf.error(error.response.data)
            this.model = ''
          })
      } else {
        this.data = null
      }
    },
  },
  {
    name: 'payment_type_id',
    typeInput: 'selectData',
    placeholder: 'Payment Type',
    model: 3,
    required: true,
    values: [
      { id: 1, name: 'Cash' },
      { id: 3, name: 'Debit automatic' },
    ],
    class: 'is-4',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
])

export const suscripcion = reactive({
  // leo_vet_fr: false,
  recurrence: true,
  locations: [],
  diciplines: [],
  member: {},
})

//METHODS

export const getMeberships = async () => {
  const response = await Api.get('v2/get_membership')
  return response
}

export const getDiscounts = async (
  status: any = null,
  applies: string = null
) => {
  const response = await Api.get(
    `discounts?status=${status}&applies=${applies}`
  )
  return response
}

export const getPresupuesto = async (solicitud: object) => {
  const response = await Api.post('v2/presupuesto_member', solicitud)
  return response
}

export const createSuscripcion = async (obj: object) => {
  const response = await Api.post('v2/create_suscripcion', obj)
  return response
}

export const remplazarSuscripcion = async (id: Number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/remplace/${id}`, obj)
  return response
}

export const getSuscripcion = async (id: Number, is_member: Boolean = true) => {
  const response = await Api.post(
    `v2/get_suscripcion/${id}?is_member=${is_member}`
  )
  return response
}

export const getSuscripcionCode = async (code: Number) => {
  const response = await Api.post(`v2/get_suscripcion/code/${code}`)
  return response
}

export const paymentSuscripcion = async (id: number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/payment/${id}`, obj)
  return response
}

export const cancelSuscripcion = async (id: number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/cancel/${id}`, obj)
  return response
}

export const upgradeSuscripcion = async (id: number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/upgrade/${id}`, obj)
  return response
}

export const updateSuscripcion = async (id: number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/update/${id}`, obj)
  return response
}

export const holdSuscripcion = async (id: number, obj: object) => {
  const response = await Api.post(`v2/suscripcion/hold/${id}`, obj)
  return response
}

export const processMultigym = async (id: number, obj: Object) => {
  const response = await Api.post(`v2/suscripcion/process_multigym/${id}`, obj)
  return response
}

export const getAmountMultigym = async (id: number, obj: Object) => {
  const response = await Api.post(
    `v2/suscripcion/get_amount_multigym/${id}`,
    obj
  )
  return response
}

export const calculoSuscripcionRestante = async (id: number) => {
  const response = await Api.post(
    `v2/suscripcion/calculo_suscripcion_restante/${id}`
  )
  return response
}

export const queuePayments = async (data: Object) => {
  const response = await Api.post(`v2/suscripcion/queuePayments`, data)
  return response
}

export const vincularPaymentInvoice = async (data: Object) => {
  const response = await Api.post(`v2/suscripcion/vincularPaymentInvoice`, data)
  return response
}
