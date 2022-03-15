import { ref, computed, onBeforeMount } from 'vue'
import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

export const memberships = ref([])

export const membership = ref({})

export const getMeberships = async () => {
  const response = await Api.get('memberships')
  memberships.value = response.data.memberships
  return response
}

export const diciplines = ref([])

export const getDiciplines = async (memberships_id: any) => {
  await Api.get(`membership/${memberships_id}/diciplines`).then((response) => {
    diciplines.value = response.data.diciplines
    return response.data
  })
}

export const getMembership = async (id: any) => {
  const response = Api.get(`memberships/${id}/edit`)
  membership.value = response.data
  return response
}

export const saveMembership = async (data) => {
  const response = await Api.post('memberships', data)
  if (response.data && response.data.status) {
    notyf.success('Record update')
    getMeberships()
  } else {
    notyf.error('error')
  }
  return response
}

export const updateMembership = async (data: any) => {
  const response = await Api.put(`memberships/${membership.value.id}`, data)
  return response
}

export const putMembership = async (id: any, data: any) => {
  const response = await Api.put(`memberships/${id}`, data)
  return response
}

export const putStatus = async (membership) => {
  membership.status = membership.status == 1 ? 0 : 1
  const response = await Api.put(`memberships/change_status/${membership.id}`, {
    status: membership.status,
  })
  if (response.data && response.data.status) {
    notyf.success('Record update')
  } else {
    notyf.error('error')
  }
  return response
}

import { getInput } from '/@src/models/Mixin.ts'

export const inputs = ref([
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'Status',
    model: [],
    class: 'is-12',
    required: false,
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Membership Name',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'text',
    name: 'description',
    placeholder: 'Membership Description',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'number',
    name: 'diciplines_number',
    placeholder: 'Number discipline access',
    model: '',
    class: 'is-4',
    required: true,
  },
  {
    typeInput: 'checkboxGroupSimpleAvatar',
    name: 'locations',
    placeholder: 'Locations',
    model: [],
    values: [],
    class: 'is-12',
    required: true,
  },
  {
    typeInput: 'checkboxGroup',
    name: 'locations_options',
    text: 'Locations Sale and Access',
    values: [],
    class: 'is-12',
    required: false,
    multilinea: true,
    subClass: 'column is-3 mt-0',
  },
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'diciplines',
    text: 'Diciplines',
    model: [],
    values: [],
    class: 'is-12',
    required: false,
    change: function (event: any, inputsStep: any) {
      event.returnValue = false
      // let checkbox = event.target.parentNode
      // console.log(checkbox)
      // console.log(checkbox.)
      // console.log(event)
      // console.log('change',this.model)
    },
    click: function (event: any, inputsStep: any) {
      // console.log('click event',event.target._value)
      const number = getInput(inputsStep, 'diciplines_number').model
      if (number != '') {
        // if(number <= this.model.length){
        //   console.log('click model',this.model)
        //   event.returnValue = false
        // }
      }
    },
  },

  {
    typeInput: 'inputsGroup',
    name: 'amounts',
    text: 'Amounts',
    type: 'number',
    model: {},
    values: [],
    class: 'is-12 d-flex',
    required: true,
  },
  {
    typeInput: 'selectData',
    name: 'taxes_id',
    placeholder: 'Apply Taxes',
    model: '',
    values: [],
    class: 'is-4',
    required: true,
    filterOptionText: function (option) {
      if (option.type == 'percentaje') {
        return `${option.name} | ${option.value}%`
      } else {
        return `${option.name} | $${option.value}`
      }
    },
  },
  {
    typeInput: 'number',
    name: 'initiation_fee',
    placeholder: 'Initation Fee',
    model: '',
    class: 'is-4',
    required: true,
  },
  // {
  //   typeInput: 'checkboxGroupSimple',
  //   name: 'can_discount_by_apply',
  //   text: 'Can Discount by Apply',
  //   model: '',
  //   values: discountsData,
  //   class: 'is-4',
  //   filter: function(option){
  //     return option.code
  //   }
  // },

  {
    typeInput: 'textarea',
    name: 'internals_notes',
    placeholder: 'Internals Notes',
    model: '',
    class: 'is-12',
    required: false,
  },
])
