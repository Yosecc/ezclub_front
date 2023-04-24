import { Api } from '/@src/services'
import { ref, computed, reactive } from 'vue'
import { validateCuponV2 } from '/@src/models/Discounts.ts'
import {
  // setInputValuesData,
  // setInputModelData,
  // getValueInput,
  // getInput,
  notyf,
  // perpareDataInputs,
  // convertFormData,
} from '/@src/models/Mixin.ts'

//DATA
export const presupuesto = ref(null)

export const suscripciones = ref(null)

export const solicitudDataInicial = {
  memberships_id: null,
  recurrences_id: null,
  is_initiation_fee: false,
  is_card_price: false,
  discount: null,
  is_last_month: false,
  multigym: false,
  prorrateo: true,
  schedules: '',
  leo_vet_fr: false,
}

export const solicitud = reactive(
  JSON.parse(JSON.stringify(solicitudDataInicial))
)

export const restartSolicitud = () => {
  Object.assign(solicitud, JSON.parse(JSON.stringify(solicitudDataInicial)))
}

export const inputsMembership = ref([
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    data: null,
    model: '',
    disabled: false,
    class: 'is-3',
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
    typeInput: 'switchEventChangeInput',
    name: 'is_initiation_fee',
    values: ['YES', 'NO'],
    placeholder: 'Initiation fee',
    default: false,
    model: solicitud.is_initiation_fee,
    disabled: false,
    class: 'is-3',
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
    class: 'is-3',
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
    class: 'is-3',
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
    class: 'is-3',
    isLabel: true,
  },

  {
    typeInput: 'switchEventChangeInput',
    name: 'prorrateo',
    values: ['', 'Prorated Payment'],
    model: true,
    default: true,
    required: false,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'switch',
    name: 'leo_vet_fr',
    values: ['', 'LAW ENFORCEMENT OFFICER'],
    html: '<div class="ml-4"><p><small>VETERAN</small></p><p><small>FIRTS RESPONDER</small></p></div>',
    model: false,
    default: false,
    required: false,
    class: 'is-4',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'date',
    name: 'schedules',
    placeholder: 'Subscription Schedules',
    model: '',
    required: false,
    class: 'is-4',
    isLabel: true,
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
