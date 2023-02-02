import { Api } from '/@src/services'
import { ref, computed, reactive } from 'vue'

//DATA
export const presupuesto = ref(null)

export const solicitud = reactive({
  memberships_id: null,
  recurrences_id: null,
  is_initiation_fee: false,
  is_card_price: false,
  discount: null,
  is_last_month: false,
  prorrateo: true,
  schedules: '',
  leo_vet_fr: false,
})

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
    name: 'prorrateo',
    values: ['', 'Prorated Payment'],
    model: true,
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
