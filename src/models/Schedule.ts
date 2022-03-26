import { ref, computed } from 'vue'
import { Api } from '/@src/services'
import {
  // notyf,
  // perpareDataInputs,
  // cleanUpModelInputs,
  // viewInput,
  // getInput,
  // getValueInput,
  // setInputValuesData,
  // setInputModelData,
  getValuesInput,
} from '/@src/models/Mixin.ts'
export const schedules = ref([])

// export const getRecurrences = async ()=>{
// 	const response = await Api.get('get_recurrences')
//     recurrences.value = response.data
//   return response
// }

export const class_locations = ref([])

export const storeSchedule = async (data) => {
  const response = await Api.post('schedule', data)
  // recurrences.value = response.data
  return response
}

export const horarios = ref([])

export const getSchedules = async (locations_id: number) => {
  const response = await Api.get(`schedule?locations_id=${locations_id}`)
  horarios.value = response.data
  return response
}

export const horario = ref()

export const getSchedule = async (id: number) => {
  const response = await Api.get(`schedule/${id}/edit`)
  horario.value = response.data
  return response
}

export const putSchedule = async (id: number, data: any) => {
  const response = await Api.put(`schedule/${id}`, data)
  horario.value = response.data
  return response
}

export const deleteSchedule = async (id: number) => {
  const response = await Api.delete(`schedule/${id}`)
  // horario.value = response.data
  return response
}

export const inputsDiciplines = ref([
  {
    typeInput: 'selectDataActionChange',
    name: 'discipline_id',
    placeholder: 'Discipline',
    values: [''],
    model: '',
    required: true,
    class: 'is-6',
  },

  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'location_id',
    text: 'Locations',
    values: [''],

    model: [],
    required: true,
    class: 'is-12',
  },
])

export const inputsDias = [
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'semana',
    text: 'Dias de la semana',
    default: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    values: [
      {
        id: 'Monday',
        name: 'Monday',
      },
      {
        id: 'Tuesday',
        name: 'Tuesday',
      },
      {
        id: 'Wednesday',
        name: 'Wednesday',
      },
      {
        id: 'Thursday',
        name: 'Thursday',
      },
      {
        id: 'Friday',
        name: 'Friday',
      },
      {
        id: 'Saturday',
        name: 'Saturday',
      },
      {
        id: 'Sunday',
        name: 'Sunday',
      },
      {
        id: 'All',
        name: 'All',
      },
    ],
    model: [],
    required: true,
    class: 'is-12',
    click: function () {},
    change: function () {
      // ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    },
  },
]

export const inputsHorarios = [
  {
    typeInput: 'switchEventChange',
    name: 'status',
    values: ['', 'Active'],
    model: true,
    required: true,
    class: 'is-2',
    click: function () {},
    change: function () {},
  },
  {
    typeInput: 'time',
    name: 'start_time',
    placeholder: 'Start Time',
    model: '',
    required: true,
    class: 'is-2',
    isLabel: true,
  },
  {
    typeInput: 'time',
    name: 'end_time',
    placeholder: 'end Time',
    model: '',
    required: true,
    class: 'is-2',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'type_of_member',
    placeholder: 'Type of Member',
    values: ['Adults Only', 'Kids Only', 'Adult & Kids'],
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'level',
    placeholder: 'Level',
    values: ['All Levels', 'Pro', 'Expert', 'Medium', 'Beginner'],
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
]

export const inputsMismosHorariosTrainer = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'mismoshorariostrainers',
    values: ['', 'Mismos horarios para todos los trainers seleccionados'],
    model: false,
    required: true,
    class: 'is-6',
    click: function () {},
    change: function () {},
  },
])

export const inputsMismosHorarios = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'mismoshorariosdias',
    values: ['', 'Mismos horarios para todos los dias'],
    model: true,
    required: true,
    class: 'is-6',
    click: function () {},
    change: function () {},
  },
])

export const inputsMismasFechas = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'mismasfechas',
    values: ['', 'Mismas fechas para todas las locaciones'],
    model: true,
    required: true,
    class: 'is-12',
    click: function () {},
    change: function () {},
  },
])

export const inputsFechas = [
  {
    typeInput: 'date',
    name: 'start_date',
    placeholder: 'Start Date',
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'time',
    name: 'start_time',
    placeholder: 'Start Time',
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'end_date',
    placeholder: 'end Date',
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'time',
    name: 'end_time',
    placeholder: 'end Time',
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'number',
    name: 'capacity',
    placeholder: 'Capacity people num',
    values: null,
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'type_of_member',
    placeholder: 'Type of Member',
    values: ['Adults Only', 'Kids Only', 'Adult & Kids'],
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'level',
    placeholder: 'Level',
    values: ['All Levels', 'Pro', 'Expert', 'Medium', 'Beginner'],
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'color',
    name: 'color',
    placeholder: 'Color',
    model: '',
    required: true,
    class: 'is-3',
    isLabel: true,
  },
  {
    typeInput: 'switchEventChangeInput',
    name: 'is_recurrence',
    placeholder: 'Recurrence',
    values: ['', 'Recurrence'],
    model: false,
    required: true,
    class: 'is-3',
    isLabel: true,
    change: function () {},
  },
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'recurrence',
    text: 'Dias de la semana',
    default: [1, 2, 3, 4, 5, 6, 0],
    values: [
      {
        id: 1,
        name: 'Monday',
      },
      {
        id: 2,
        name: 'Tuesday',
      },
      {
        id: 3,
        name: 'Wednesday',
      },
      {
        id: 4,
        name: 'Thursday',
      },
      {
        id: 5,
        name: 'Friday',
      },
      {
        id: 6,
        name: 'Saturday',
      },
      {
        id: 0,
        name: 'Sunday',
      },
      {
        id: 'All',
        name: 'All',
      },
    ],
    model: [],
    required: true,
    disabled: true,
    class: 'is-12',
    click: function () {},
    change: function () {},
  },
]

export const inputsTrainers = ref([
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'trainers_id',
    text: 'Trainers',
    values: [''],
    model: [],
    required: true,
    class: 'is-12',
  },
])

export const objetoSchedule = ref(null)
