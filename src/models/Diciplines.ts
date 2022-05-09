import { ref, computed } from 'vue'

import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

export const diciplinesData = ref([])

export const diciplines = computed(() => {
  return JSON.parse(JSON.stringify(diciplinesData.value))
})

export const getDiciplines = async () => {
  const response = await Api.get('diciplines_get')
  diciplinesData.value = response.data.diciplines
  return response.data.diciplines
}

export const dicipline = ref({})

export const getDicipline = async (id: any) => {
  const response = await Api.get(`diciplines/${id}/edit`)
  dicipline.value = response.data
  return response
}

export const getLocationsDiciplines = async (locationsIds) => {
  const locationsDiciplines = await Api.get('locations/diciplines/get', {
    params: {
      locations: locationsIds,
    },
  })
  return locationsDiciplines
}

export const putStatus = async (dicipline) => {
  dicipline.status = dicipline.status == 1 ? 0 : 1
  const response = await Api.put(`diciplines/change_status/${dicipline.id}`, {
    status: dicipline.status,
  })
  if (response.data && response.data.status) {
    notyf.success('Record update')
  } else {
    notyf.error('error')
  }
  return response
}

export const saveDicipline = async (dicipline) => {
  const response = await Api.post('diciplines', dicipline)
  if (response.data && response.data.status) {
    notyf.success('Record update')
    getDiciplines()
  } else {
    notyf.error('error')
  }
  return response
}

export const putDicipline = async (id, data) => {
  const response = await Api.put(`diciplines/${id}`, data)
  if (response.data && response.data.status) {
    notyf.success('Record update')
  } else {
    notyf.error('error')
  }
  return response
}

export const inputs = ref([
  {
    typeInput: 'checkbox',
    name: 'CombineDiscipline',
    placeholder: 'Combine Discipline',
    model: [],
    required: false,
    isLabel: true,
    class: 'is-2',
  },
  {
    typeInput: 'checkbox',
    name: 'status',
    placeholder: 'Can be add it to membership',
    model: [],
    required: true,
    isLabel: true,
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Discipline Name',
    model: '',
    required: true,
    isLabel: true,
    class: 'is-7',
  },
  {
    typeInput: 'checkboxGroupSimple',
    text: 'Locations',
    name: 'locations',
    placeholder: 'Locations',
    model: [],
    values: [],
    required: true,
    isLabel: true,
    class: 'is-12',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'trainers',
    text: 'Trainers',
    model: [],
    values: [],
    required: true,
    isLabel: true,
    class: 'is-12',
  },
  {
    typeInput: 'textarea',
    name: 'descrptions',
    placeholder: 'Discipline Description',
    model: '',
    required: true,
    isLabel: true,
    class: 'is-12',
  },

  {
    typeInput: 'textarea',
    name: 'notes',
    placeholder: 'Internal Notes',
    model: '',
    required: false,
    isLabel: true,
    class: 'is-12',
  },
])
