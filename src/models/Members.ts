import { ref, computed, onBeforeMount, reactive } from 'vue'
import { Api } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { validateCupon } from '/@src/models/Discounts.ts'

import {
  setInputValuesData,
  setInputModelData,
  getValueInput,
  getInput,
  notyf,
  perpareDataInputs,
  convertFormData,
} from '/@src/models/Mixin.ts'
import { getMembershipDiciplines } from '/@src/models/Memberships.ts'

import moment from 'moment'
export const members = ref([])
export const membersSelected = ref([])
export const idMember = ref(null)
export const idMemberMembership = ref(null)
export const cupon = ref(null)
export const error = ref(false)
export const pagado = ref(false)
export const familiaresMembers = ref(null)
export const dataInformationMember = ref(null)
export const dataContact = ref(null)
export const memberMembership = ref(null)
export const idMemberPrincipal = ref(null)
export const presupuestos = ref([])
export const categoriesMembers = ref({
  name: 'category',
  values: ['Adult', 'Minor', 'Prospect'],
  model: 'Adult',
  required: true,
})

export const categorieActive = computed(() => {
  return categoriesMembers.value.model
})

export const mismatarjeta = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'mismatarjeta',
    values: ['', 'Pay with the same card'],
    model: true,
    required: false,
    class: 'is-12',
    isLabel: true,
  },
])

export const inputsInformation = ref([
  {
    typeInput: 'switchEventChange',
    name: 'select_type',
    values: ['Individual', 'Company'],
    model: false,
    required: false,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Member Picture',
    model: '',
    required: false,
    class: 'is-12 d-flex justify-content-end',
    isLabel: true,
    categories: ['Adult', 'Minor'],
    typeMember: ['Individual', 'Company'],
    camera: true,
    modalName: 'Miembro',
  },
  {
    typeInput: 'text',
    name: 'company_name',
    placeholder: 'Company Name',
    model: '',
    class: 'is-12',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Company'],
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    required: false,
    class: 'is-4',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-4',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'bar_code',
    placeholder: 'Client ID Card',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Minor'],
    typeMember: ['Individual', 'Company'],
    hasError: false,
    keyUp: async (event, input) => {
      if (input.model.length >= 9) {
        await Api.get(`searchmember/${input.model}`)
          .then((response) => {
            if (response.data.status) {
              input.hasError = true
              notyf.error('Barcode already exists')
            } else {
              input.hasError = false
            }
          })
          .catch((error) => {
            input.hasError = false
          })
      }
    },
  },
  {
    typeInput: 'date',
    name: 'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    required: true,
    class: categorieActive.value == 'Prospect' ? 'is-6' : 'is-3',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    maxLength: 10,
    maxDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),
    keyUp: (event, input) => {
      const formatos = ['YYYY-MM-DD', 'YYYY/MM/DD']
      if (input.model.length >= 10) {
        if (!moment(input.model, formatos, true).isValid()) {
          notyf.error('Date invalid')
          input.hasError = true
        } else {
          input.hasError = false
        }
      }
    },
  },
  {
    typeInput: 'select',
    name: 'gender',
    placeholder: 'Gender',
    values: ['Male', 'Female'],
    model: '',
    required: true,
    class: categorieActive.value == 'Prospect' ? 'is-6' : 'is-3',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: [
      'Florida Driver License',
      'Other State ID',
      'Florida ID Card',
      'Passport',
      'Foreing Country ID',
      'Florida Personal Identification Card',
      'Florida Learner License',
    ],
    model: '',
    required: false,
    class: 'is-4',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: false,
    class: 'is-8',
    isLabel: true,
    categories: ['Adult', 'Prospect', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    required: true,
    model: '',
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },

  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'switch',
    name: 'leo_vet_fr',
    values: ['', 'LEO / VET / FR'],
    model: false,
    default: false,
    required: false,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'number',
    name: 'id_leo_vet_fr',
    placeholder: 'LEO / VET / FR ID#',
    model: '',
    required: false,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'hidden',
    name: 'is_family',
    placeholder: '',
    model: 0,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'hidden',
    name: 'principal_family',
    placeholder: 'LEO / VET / FR ID#',
    model: 1,
    class: 'is-6',
    isLabel: true,
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
])

const familyData = ref([
  {
    typeInput: 'switchEventChangeInput',
    typeInputDefault: 'switchEventChangeInput',
    name: 'category',
    values: ['Adult', 'Minor'],
    class: 'is-6',
    isLabel: true,
    model: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'file',
    typeInputDefault: 'file',
    name: 'photo',
    placeholder: 'Member Picture',
    class: 'is-6 d-flex justify-content-end',
    isLabel: true,
    model: '',
    required: false,
    category: ['Adult', 'Minor'],
    camera: true,
    modalName: 'Familiar',
  },
  {
    typeInput: 'select',
    typeInputDefault: 'select',
    name: 'relationships',
    placeholder: 'Relationship',
    values: [
      'Son',
      'Daughter',
      'Wife',
      'Husband',
      'Father',
      'Mother',
      'Brother',
      'Sister',
      'Other',
    ],
    model: '',
    class: 'is-6',
    isLabel: true,
    required: true,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    typeInputDefault: 'text',
    name: 'bar_code',
    placeholder: 'Client ID Card',
    model: '',
    class: 'is-6',
    isLabel: true,
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'date',
    typeInputDefault: 'date',
    name: 'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    class: 'is-6',
    isLabel: true,
    required: false,
    category: ['Adult', 'Minor'],
    maxDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),
  },
  {
    typeInput: 'select',
    typeInputDefault: 'select',
    name: 'gender',
    placeholder: 'Gender',
    values: ['Male', 'Female'],
    model: '',
    class: 'is-6',
    isLabel: true,
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    typeInputDefault: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    typeInputDefault: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    typeInputDefault: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'select',
    typeInputDefault: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: [
      'Florida Driver License',
      'Other State ID',
      'Florida ID Card',
      'Passport',
      'Foreing Country ID',
      'Florida Personal Identification Card',
      'Florida Learner License',
    ],
    model: '',
    class: 'is-4',
    isLabel: true,
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'number',
    typeInputDefault: 'number',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    class: 'is-8',
    isLabel: true,
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'switchEventChangeInput',
    typeInputDefault: 'switchEventChangeInput',
    name: 'misma_direccion',
    values: ['', 'Use the same address as the parent member'],
    model: false,
    required: false,
    class: 'is-12',
    isLabel: true,
    category: ['Adult'],
  },
  {
    typeInput: 'text',
    typeInputDefault: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    class: 'is-12',
    isLabel: true,
    required: true,
    category: ['Adult'],
  },
  {
    typeInput: 'selectData',
    typeInputDefault: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-3',
    isLabel: true,
    required: true,
    category: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    typeInputDefault: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-3',
    isLabel: true,
    required: true,
    category: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'number',
    typeInputDefault: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-3',
    isLabel: true,
    required: true,
    category: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    typeInputDefault: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-3',
    isLabel: true,
    required: true,
    category: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },

  {
    typeInput: 'email',
    typeInputDefault: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    class: 'is-6',
    isLabel: true,
    required: true,
    category: ['Adult'],
  },
  {
    typeInput: 'number',
    typeInputDefault: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    class: 'is-6',
    isLabel: true,
    required: true,
    category: ['Adult'],
  },
  {
    typeInput: 'checkbox',
    typeInputDefault: 'checkbox',
    name: 'leo_vet_fr',
    placeholder: 'LEO / VET / FR',
    model: [],
    required: false,
    class: 'is-6',
    isLabel: true,
    category: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'number',
    typeInputDefault: 'number',
    name: 'id_leo_vet_fr',
    placeholder: 'LEO / VET / FR ID#',
    model: '',
    required: false,
    class: 'is-6',
    isLabel: true,
    category: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'hidden',
    typeInputDefault: 'hidden',
    name: 'is_family',
    placeholder: '',
    model: 1,
    class: 'is-6',
    isLabel: true,
    category: ['Adult', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'hidden',
    typeInputDefault: 'hidden',
    name: 'principal_family',
    placeholder: '',
    model: 0,
    class: 'is-6',
    isLabel: true,
    category: ['Adult', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
])

export const inputsFamily = computed(() => {
  return familyData.value
})

export const inputsContact = ref([
  {
    typeInput: 'checkboxGroup',
    name: 'notifications',
    text: "When you ask clients to opt in, remind them that we'll still send receipts and anything critical",
    values: [
      {
        name: 'notifications_types_id',
        value: 1,
        placeholder: 'Account Information',
        values: [
          {
            placeholder: 'Email',
            name: 'email',
            model: ['email'],
          },
          {
            placeholder: 'SMS',
            name: 'sms',
            model: ['sms'],
          },
        ],
      },
      {
        name: 'notifications_types_id',
        value: 2,
        placeholder: 'Reminders and schedule changes',
        values: [
          {
            placeholder: 'Email',
            name: 'email',
            model: ['email'],
          },
          {
            placeholder: 'SMS',
            name: 'sms',
            model: ['sms'],
          },
        ],
      },
      {
        name: 'notifications_types_id',
        value: 3,
        placeholder: 'News and promos',
        values: [
          {
            placeholder: 'Email',
            name: 'email',
            model: ['email'],
          },
          {
            placeholder: 'SMS',
            name: 'sms',
            model: ['sms'],
          },
        ],
      },
    ],
  },
])

export const membershipsData = reactive([
  {
    typeInput: 'switchEventChangeInput',
    name: 'recurrence',
    values: ['', 'Recurrence'],
    placeholder: 'Recurrence',
    model: true,
    disabled: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'memberships_id',
    placeholder: 'Membership Type',
    values: [],
    model: '',
    disabled: false,
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'radioBoxsInput',
    name: 'recurrences_id',
    placeholder: 'Recurrence & Amount',
    values: [],
    model: '',
    disabled: false,
    required: true,
    class: 'is-12',
    isLabel: true,
    filterName: 'descriptions',
    otros: 'amount',
  },
  {
    typeInput: 'hidden',
    name: 'amount',
    placeholder: 'Amount',
    required: true,
    model: '',
    disabled: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'locations_id',
    placeholder: 'Locations Sale',
    required: true,
    values: [],
    model: '',
    disabled: false,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'diciplines',
    text: 'Disciplines',
    required: true,
    model: [],
    values: [],
    disabled: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'number',
    name: 'initiation_fee',
    required: true,
    placeholder: 'Initiation fee',
    model: [],
    disabled: true,
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'checkbox',
    name: 'is_initiation_fee',
    placeholder: 'No initiation fee',
    model: [],
    disabled: false,
    class: 'is-4',
  },
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    data: null,
    model: '',
    disabled: false,
    class: 'is-6',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'staff_id',
    placeholder: 'Trainer',
    values: [],
    model: '',
    disabled: false,
    required: false,
    class: 'is-12',
  },
])

export const notasInput = ref([
  {
    typeInput: 'textarea',
    name: 'notes',
    placeholder: 'Notes',
    model: '',
    disabled: false,
    class: 'is-12',
    isLabel: true,
  },
])

export const parentInsputs = ref([
  {
    typeInput: 'file',
    name: 'parent_photo',
    placeholder: 'Parent/Guardian Picture',
    model: '',
    class: 'is-12 d-flex justify-content-end',
    isLabel: true,
    required: true,
    camera: true,
  },
  {
    typeInput: 'select',
    name: 'parent_relationships',
    placeholder: 'Parent Relationships',
    values: [
      'Sand',
      'Dother',
      'Wife',
      'Girlfriend',
      'Boyfriend',
      'Father',
      'Mother',
    ],
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_second_name',
    placeholder: 'Middle Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'select',
    name: 'parent_goverment_id',
    placeholder: 'Goverment ID Type',
    values: [
      'Florida Driver License',
      'Other State ID',
      'Florida ID Card',
      'Passport',
      'Foreing Country ID',
      'Florida Personal Identification Card',
      'Florida Learner License',
    ],
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'number',
    name: 'parent_personal_identifications',
    placeholder: 'ID #',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    required: true,
    model: '',
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    required: true,
    values: [''],
    class: 'is-3',
    isLabel: true,
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'email',
    name: 'parent_email',
    placeholder: 'Email',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
  {
    typeInput: 'number',
    name: 'parent_phone',
    placeholder: 'Phone Number',
    model: '',
    class: 'is-4',
    isLabel: true,
    required: true,
  },
])

export const emergencyInputs = ref([
  {
    typeInput: 'text',
    name: 'first_name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'middle_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    isLabel: true,
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    class: 'is-8',
    isLabel: true,
  },
  {
    typeInput: 'number',
    name: 'phone_number',
    placeholder: 'Phone',
    model: '',
    class: 'is-4',
    isLabel: true,
  },

  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    class: 'is-8',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'relationship',
    placeholder: 'Relationship',
    values: [
      'Sand',
      'Dother',
      'Wife',
      'Girlfriend',
      'Boyfriend',
      'Father',
      'Mother',
    ],
    model: '',
    class: 'is-4',
    isLabel: true,
    required: false,
  },
])

export const inputsMembership = reactive([])

export const member = ref()

export const getPresupuesto = async (data: any) => {
  const response = Api.post('getPresupuesto', data)
  return response
}

export const getRecurrencesSelect = async (id: any, is_recurrence: any = 1) => {
  const response = Api.post('recurrences_select', {
    memberships_id: id,
    is_recurrence: is_recurrence,
  })
  return response
}

export const saveMember = async (member: any) => {
  const response = await Api.post('members', member)
  member.value = response.data.member
  return response
}

export const getMember = async (id: any) => {
  const response = await Api.get(`members/${id}/edit`)
  member.value = response.data
  return response
}

export const putInformation = async (data: any) => {
  const response = await Api.post(
    `members/updatePersonalInformation/${member.value.id}`,
    data
  )
  return response
}

export const putMembership = async (data: any) => {
  const response = await Api.post(
    `members/updateMembershipMember/${memberMermship.value.id}`,
    data
  )
  return response
}

export const pauseMembership = async (id: any) => {
  const response = await Api.get(
    `members/pause_membership/${memberMermship.value.id}`
  )
  return response
}

export const getMemberAccess = async (barcode: any) => {
  const response = Api.get(`searchmember/${barcode}`)
  return response
}

export const cancelMembershipMembers = async () => {
  const response = await Api.post(
    `members/cancelMembershipMember/${memberMermship.value.id}`
  )
  return response
}

export const storeContactEmergency = async (data: any) => {
  const response = await Api.post(
    `members/contactEmergencystore/${member.value.id}`,
    data
  )
  return response
}

export const storePaymentCash = async (id: number, data: object) => {
  const response = await Api.post(`paymentCash/${id}`, data)
  return response
}

export const putMemberGuardian = async (data: any) => {
  const response = await Api.put(`members/guardian/${member.value.id}`, data)
  return response
}

export const storeNewMembership = async (data: any) => {
  const response = await Api.post(`newMembershipMember`, data)
  return response
}

export const storeFirma = async (base64: any, id: any) => {
  const response = await Api.post(`sign/${id}`, {
    sign: base64,
  })
  return response
}

// Stripe
export const getCardsMembers = async (id: number) => {
  const response = await Api.get(`members/cards/${id}`)
  return response
}

// Stripe
export const getListInvoices = async (id: number) => {
  const response = await Api.get(`members/list_invoices/${id}`)
  member.value.invoices = response.data
  return response
}

export const subscriptionsCreateStripe = async () => {
  const response = await Api.post(`members/subscriptions_create_stripe`, {
    members: membersSelected.value,
    trial_end: 1,
    trial: true,
  })
  return response
}

export const memberMermship = computed(() => {
  return member.value.membership_members
})

export const memberMembershipsHistory = computed(() => {
  return member.value.membership_members_history
})

export const memberFamilies = computed(() => {
  return member.value.families_children
})

export const memberParent = computed(() => {
  if (member.value.family_parent) {
    return member.value.family_parent.pincipal_family
  }
  return null
})

export const contactEmergency = computed(() => {
  return member.value.emergency
})

export const accessDay = computed(() => {
  return member.value.access_day
})

export const memberMembershipPayments = computed(() => {
  return memberMermship.value.payments
})

export const DueDate = computed(() => {
  let fechas = memberMermship.value.created_at
  if (memberMembershipPayments.value[0].status) {
    fechas = memberMembershipPayments.value[0].created_at
  }
  return moment(fechas).add(memberMermship.value.recurrence.recurrence, 'd')
})

export const isSolvente = computed(() => {
  return member.value.isSolvente
})
export const sinMembresia = computed(() => {
  return member.value.sinMembresia
})

const change_memberships_id = function (inputsStep: any) {
  const membershipSelected = this.values.find(
    (element: any) => element.id == this.model
  )

  setInputModelData(
    inputsStep,
    'initiation_fee',
    membershipSelected.initiation_fee
  )

  const locations = []
  membershipSelected.locations.forEach((element: any) => {
    if (element.sale == 1) {
      locations.push(element.company_locations)
    }
  })
  setInputValuesData(inputsStep, 'locations_id', locations)
  let is_recurrence = 1
  if (!getInput(inputsStep, 'recurrence').model) {
    is_recurrence = 0
  }

  if (categorieActive.value == 'Prospect') {
    is_recurrence = 0
  }

  getRecurrencesSelect(this.model, is_recurrence).then((response) => {
    getInput(inputsStep, 'recurrences_id').values = response.data
  })

  getMembershipDiciplines(this.model).then((response) => {
    if (response.data.length) {
      setInputValuesData(inputsStep, 'diciplines', response.data)
      getInput(inputsStep, 'diciplines').values.push({ id: 0, name: 'All' })
    }

    const numeroDiciplinas = this.values.find(
      (e: any) => e.id == this.model
    ).diciplines_number

    if (numeroDiciplinas == 0) {
      getInput(inputsStep, 'diciplines').required = false
    } else {
      getInput(inputsStep, 'diciplines').required = true
    }
    changeDiciplinesAll(inputsStep)
  })

  // getInput(inputsStep,'discount').model = membershipSelected.descuento_vet
}

const change_recurrences_id = function (inputsStep: any) {
  setInputModelData(
    inputsStep,
    'amount',
    this.values.find((e) => e.id == this.model).amount
  )
}

const change_locations_id = function (inputsStep: any) {
  // getLocationsDiciplines([this.model]).then((response: any) => {
  //   getInput(inputsStep, 'diciplines').model = []
  //   setInputValuesData(inputsStep, 'diciplines', response.data)
  //   changeDiciplinesAll(inputsStep)
  // })
}

const changeDiciplinesAll = (inputsStep: any) => {
  if (getValueInput(inputsStep, 'memberships_id').all_diciplines == 1) {
    getInput(inputsStep, 'diciplines').values.forEach((e: any) => {
      getInput(inputsStep, 'diciplines').model.push(e.id)
    })
  } else {
    getInput(inputsStep, 'diciplines').model = []
  }
}

const change_discount = function (inputsStep: any) {
  if (this.model != '') {
    validateCupon(
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
}

const filter_discount = function (option) {
  return `${option.name}`
}

export const filterOptionText_staff_id = function (option) {
  if (option.second_name) {
    return `${option.name} ${option.second_name} ${option.last_name}`
  }
  return `${option.name}  ${option.last_name}`
}

const click_diciplines = function (event: any, inputsStep: any, id: number) {
  const number = getValueInput(inputsStep, 'memberships_id').diciplines_number

  if (number > 0) {
    if (number <= this.model.length) {
      event.returnValue = false
    }

    if (number == this.model.length) {
      if (this.model.includes(id)) {
        const index = this.model.findIndex((e) => e == id)
        const arr = []

        this.model.forEach((e, i) => {
          if (index != i) {
            arr.push(e)
          }
        })
        this.model = arr
      } else {
        notyf.error('You must select a limit of ' + number + ' diciplines')
      }
    }
  }
}

const change_is_recurrence = function (inputsStep: any) {
  const memberships_id = getInput(inputsStep, 'memberships_id').model
  if (memberships_id != '') {
    let is_recurrence = null
    if (!this.model) {
      is_recurrence = 1
    } else {
      is_recurrence = 0
    }

    if (categorieActive.value == 'Prospect') {
      is_recurrence = 0
    }

    getRecurrencesSelect(memberships_id, is_recurrence).then((response) => {
      getInput(inputsStep, 'recurrences_id').values = response.data
    })
  }
}

export const setInputsEvents = (inputs: any) => {
  getInput(inputs, 'memberships_id').change = change_memberships_id
  getInput(inputs, 'recurrences_id').change = change_recurrences_id
  getInput(inputs, 'locations_id').change = change_locations_id
  getInput(inputs, 'discount').change = change_discount
  getInput(inputs, 'discount').filter = filter_discount
  getInput(inputs, 'staff_id').filterOptionText = filterOptionText_staff_id
  getInput(inputs, 'diciplines').change = function (
    event: any,
    inputsStep: any
  ) {}
  getInput(inputs, 'recurrence').change = change_is_recurrence
  getInput(inputs, 'diciplines').click = click_diciplines
}

export const proccessMembership = async (props: object) => {
  const fd = new FormData()
  const memberObject = perpareDataInputs(props.member)

  convertFormData(fd, memberObject)

  for (let i = 0; i < props.contact.length; i++) {
    const item = props.contact[i]
    for (const prop in item) {
      fd.append(`notifications[${i}][${prop}]`, item[prop])
    }
  }

  const memberMembershipFD = perpareDataInputs(props.membresia)
  for (const i in memberMembershipFD) {
    if (i == 'diciplines') {
      const ite = memberMembershipFD[i]
      for (let e = 0; e < ite.length; ++e) {
        fd.append('diciplines[]', ite[e])
      }
    } else {
      fd.append(i, memberMembershipFD[i])
    }
  }

  fd.append('total', props.total)
  fd.append('payment_type_id', 3)

  const categoriesMembersFD = perpareDataInputs(props.categoriesMembers, {
    array: false,
  })

  console.log(categoriesMembersFD)

  if (categoriesMembersFD.category == 'Minor') {
    fd.append('address', getInput(parentInsputs.value, 'address').model)
    fd.append('postal_code', getInput(parentInsputs.value, 'postal_code').model)
    fd.append('city_id', getInput(parentInsputs.value, 'city_id').model)
    fd.append('country_id', getInput(parentInsputs.value, 'country_id').model)
    fd.append('state_id', getInput(parentInsputs.value, 'state_id').model)
    fd.append('email', getInput(parentInsputs.value, 'parent_email').model)

    const parent = perpareDataInputs(parentInsputs.value)

    for (const i in parent) {
      fd.append(`guardian[${i}]`, parent[i])
    }
  }

  for (const i in categoriesMembersFD) {
    fd.append(i, categoriesMembersFD[i])
  }

  const notasInputFD = perpareDataInputs(props.notasInput)
  for (const i in notasInputFD) {
    fd.append(i, notasInputFD[i])
  }

  fd.append('presupuesto_id', props.presupuesto_id)

  if (idMemberPrincipal.value) {
    fd.append('id_principal', idMemberPrincipal.value)
  }

  const obj = null
  const response = await saveMember(fd)
    .then((response) => {
      idMember.value = response.data.id
      idMemberMembership.value = response.data.membership_members_id
      if (getInput(props.member, 'is_family').model == 0) {
        idMemberPrincipal.value = idMember.value
      }
      return response
    })
    .catch((error) => {
      for (const i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
      return error
    })

  return response
}

const Objectforthebudget = (inputs: any) => {
  return {
    memberships_id: getInput(inputs, 'memberships_id').model,
    recurrences_id: getInput(inputs, 'recurrences_id').model,
    is_initiation_fee:
      getInput(inputs, 'is_initiation_fee').model.length == 0 ? true : false,
    discount: getInput(inputs, 'discount').data
      ? getInput(inputs, 'discount').data.code
      : null,
  }
}

export const generaPresupuesto = async (membresia: any, member: any) => {
  if (getInput(member, 'email').model == '') {
    notyf.error('Email is required')
    return
  }

  const data = {
    ...Objectforthebudget(membresia),
  }

  data.email = getInput(member, 'email')
    ? getInput(member, 'email').model
    : null
  data.leo_vet_fr = getInput(member, 'leo_vet_fr')
    ? getInput(member, 'leo_vet_fr').model
    : null

  getPresupuesto(data)
    .then((response) => {
      presupuestos.value.push({
        ...response.data,
        member: member,
        membresia: membresia,
      })
    })
    .catch((error) => {
      for (const e in error.response.data) {
        if (typeof error.response.data[e] == 'string') {
          // notyf.error(`${error.response.data[e]}`)
        } else {
          error.response.data[e].forEach((i) => {
            notyf.error(`${e}: ${i}`)
          })
        }
      }
    })
}
