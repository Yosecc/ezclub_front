import { ref, computed, onBeforeMount, reactive } from 'vue'
import { Api } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { validateCupon } from '/@src/models/Discounts.ts'
import {
  // viewInput,
  setInputValuesData,
  setInputModelData,
  // perpareDataInputs,
  // hasErrors,
  getInput,
  notyf,
} from '/@src/models/Mixin.ts'

import moment from 'moment'

export const idMember = ref(null)
export const idMemberMembership = ref(null)
export const cupon = ref(null)

export const categoriesMembers = ref({
  name: 'category',
  values: ['Adult', 'Minor', 'Prospect'],
  model: 'Adult',
  required: true,
})

const categorieActive = computed(() => {
  return categoriesMembers.value.model
})

export const inputsInformation = ref([
  {
    typeInput: 'switchEventChange',
    name: 'select_type',
    values: ['Individual', 'Company'],
    model: false,
    required: false,
    class: 'is-6',
    categories: ['Adult'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Member Picture',
    model: '',
    required: true,
    class: 'is-12 d-flex justify-content-end',
    categories: ['Adult', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'company_name',
    placeholder: 'Company Name',
    model: '',
    class: 'is-12',
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
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    required: true,
    class: 'is-4',
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
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
    maxLength: 10,
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
    values: ['Male', 'Female', 'Binario'],
    model: '',
    required: true,
    class: categorieActive.value == 'Prospect' ? 'is-6' : 'is-3',
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID', 'Identification ID', 'Passport'],
    model: '',
    required: true,
    class: 'is-4',
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: true,
    class: 'is-8',
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
    categories: ['Adult', 'Prospect', 'Minor'],
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
    categories: ['Adult', 'Prospect', 'Minor'],
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
    categories: ['Adult', 'Prospect', 'Minor'],
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
    categories: ['Adult', 'Prospect', 'Minor'],
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
    categories: ['Adult', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'checkbox',
    name: 'leo_vet_fr',
    placeholder: 'LEO / VET / FR',
    model: [],
    required: false,
    class: 'is-6',
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
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'hidden',
    name: 'is_family',
    placeholder: '',
    model: 0,
    class: 'is-6',
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'hidden',
    name: 'principal_family',
    placeholder: 'LEO / VET / FR ID#',
    model: 0,
    class: 'is-6',
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
])

const familyData = ref([
  {
    typeInput: 'switchEventChange',
    name: 'category',
    values: ['Adult', 'Minor'],
    class: 'is-6',
    model: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Member Picture',
    class: 'is-6 d-flex justify-content-end',
    model: '',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'select',
    name: 'relationships',
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
    class: 'is-6',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    name: 'bar_code',
    placeholder: 'Client ID Card',
    model: '',
    class: 'is-6',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'date',
    name: 'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    class: 'is-6',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'select',
    name: 'gender',
    placeholder: 'Gender',
    values: ['Male', 'Female', 'Binario'],
    model: '',
    class: 'is-6',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    class: 'is-4',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    required: false,
    category: ['Adult', 'Minor'],
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID', 'Identification ID', 'Passport'],
    model: '',
    class: 'is-4',
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'number',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    class: 'is-8',
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-3',
    categories: ['Adult', 'Prospect', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-3',
    categories: ['Adult', 'Prospect', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-3',
    categories: ['Adult', 'Prospect', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-3',
    categories: ['Adult', 'Prospect', 'Minor'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    class: 'is-12',
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    class: 'is-6',
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    class: 'is-6',
    required: false,
    category: ['Adult'],
  },
  {
    typeInput: 'checkbox',
    name: 'leo_vet_fr',
    placeholder: 'LEO / VET / FR',
    model: [],
    required: false,
    class: 'is-6',
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
    categories: ['Adult'],
    typeMember: ['Individual'],
  },
  {
    typeInput: 'hidden',
    name: 'is_family',
    placeholder: '',
    model: 1,
    class: 'is-6',
    categories: ['Adult', 'Minor', 'Prospect'],
    typeMember: ['Individual', 'Company'],
  },
  {
    typeInput: 'hidden',
    name: 'principal_family',
    placeholder: '',
    model: 0,
    class: 'is-6',
    categories: ['Adult', 'Minor', 'Prospect'],
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

export const membershipsData = ref([
  {
    typeInput: 'checkbox',
    name: 'recurrence',
    placeholder: 'Recurrence',
    model: ['recurrence'],
    disabled: false,
    class: 'is-12',
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
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'diciplines',
    text: 'Diciplines',
    required: true,
    model: [],
    values: [],
    disabled: false,
    class: 'is-12',
  },
  {
    typeInput: 'number',
    name: 'initiation_fee',
    required: true,
    placeholder: 'Initiation fee',
    model: [],
    disabled: true,
    class: 'is-4',
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
  },
  {
    typeInput: 'selectData',
    name: 'staff_id',
    placeholder: 'Trainer',
    values: [],
    model: '',
    disabled: false,
    required: false,
    class: 'is-6',
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
  },
])

export const parentInsputs = ref([
  {
    typeInput: 'file',
    name: 'parent_photo',
    placeholder: 'Parent/Guardian Picture',
    model: '',
    class: 'is-12 d-flex justify-content-end',
    required: true,
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
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_second_name',
    placeholder: 'Middle Name',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'select',
    name: 'parent_goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID', 'Identification ID', 'Passport'],
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'number',
    name: 'parent_personal_identifications',
    placeholder: 'ID #',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'text',
    name: 'parent_address',
    placeholder: 'Address',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'email',
    name: 'parent_email',
    placeholder: 'Email',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'number',
    name: 'parent_phone',
    placeholder: 'Phone Number',
    model: '',
    class: 'is-4',
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
  },
  {
    typeInput: 'text',
    name: 'middle_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name: 'phone_number',
    placeholder: 'Phone',
    model: '',
    class: 'is-4',
  },

  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'select',
    name: 'relationship',
    placeholder: 'Relationship',
    values: [
      'Sand',
      'Sister',
      'Dother',
      'Wife',
      'Girlfriend',
      'Boyfriend',
      'Father',
      'Mother',
    ],
    model: '',
    class: 'is-4',
    required: false,
  },
])

export const inputsMembership = ref([])

export const member = ref()

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
  return moment(memberMermship.value.created_at).add(
    memberMermship.value.recurrence.recurrence,
    'd'
  )
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

  const recurrencesData = []
  membershipSelected.amounts.forEach((element: any) => {
    const recurrencesD = recurrences.value.find(
      (e: any) => e.id == element.recurrences_id
    )
    recurrencesD.amount = element.amount
    recurrencesData.push(recurrencesD)
  })

  setInputValuesData(inputsStep, 'recurrences_id', recurrencesData)

  const numeroDiciplinas = this.values.find(
    (e: any) => e.id == this.model
  ).diciplines_number

  if (numeroDiciplinas == 0) {
    getInput(inputsStep, 'diciplines').required = false
  } else {
    getInput(inputsStep, 'diciplines').required = true
  }
}

const change_recurrences_id = function (inputsStep: any) {
  setInputModelData(
    inputsStep,
    'amount',
    this.values.find((e) => e.id == this.model).amount
  )
}

const change_locations_id = function (inputsStep: any) {
  getLocationsDiciplines([this.model]).then((response: any) => {
    setInputValuesData(inputsStep, 'diciplines', response.data)
  })
}

const change_discount = function (inputsStep: any) {
  if (this.model != '') {
    validateCupon(
      this.values.find((e: any) => e.id == this.model).code,
      'membership'
    )
      .then((response: any) => {
        this.data = response.data
        notyf.success('Discuount Apply')
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
  return `${option.code}`
}

export const filterOptionText_staff_id = function (option) {
  return `${option.name} ${option.second_name} ${option.last_name}`
}

export const setInputsEvents = (inputs: any) => {
  getInput(inputs, 'memberships_id').change = change_memberships_id
  getInput(inputs, 'recurrences_id').change = change_recurrences_id
  getInput(inputs, 'locations_id').change = change_locations_id
  getInput(inputs, 'discount').change = change_discount
  getInput(inputs, 'discount').filter = filter_discount
  getInput(inputs, 'staff_id').filterOptionText = filterOptionText_staff_id
}
